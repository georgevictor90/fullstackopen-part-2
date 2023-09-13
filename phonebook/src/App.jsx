import { useState } from "react";
import personsService from "./services/persons";
import Form from "./components/Form";
import Search from "./components/Search";
import Persons from "./components/Persons";
import Person from "./components/Person";
import { useEffect } from "react";
import Button from "./components/Button";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    personsService.getPersons().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    const foundPerson = persons.find((person) => person.name === newName);
    const sameNumber = foundPerson?.number === phoneNum;

    switch (true) {
      //Person is already in phonebook with the same number
      case foundPerson && sameNumber:
        return alert(`${newName} is already added to phonebook`);
        break;

      //Person is already in phonebook with a different number
      case foundPerson && !sameNumber:
        const replaceNumber = window.confirm(
          `${foundPerson.name} is already added to phonebook, replace the old number with a new one?`
        );

        if (!replaceNumber) return;

        personsService.edit(foundPerson.id, phoneNum).then((response) => {
          setPersons(
            persons.map((person) =>
              person.id === foundPerson.id ? response : person
            )
          );
          setNewName("");
          setPhoneNum("");
        });
        return;
        break;

      //Add a completely new person to phonebook
      default:
        const newPerson = { name: newName, number: phoneNum };
        personsService.create(newPerson).then((returnedPerson) => {
          setPersons([...persons, returnedPerson]);
          setNewName("");
          setPhoneNum("");
        });
        break;
    }
  };

  const deletePerson = (id) => {
    const name = persons.find((person) => person.id === id).name;

    if (!window.confirm(`Delete ${name}?`)) return;

    personsService.removeEntry(id).then((response) => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => setSearch(e.target.value);
  const handleChange = (e, type) => {
    type === "name" ? setNewName(e.target.value) : setPhoneNum(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <h3>Add new</h3>
      <Form
        name={newName}
        phone={phoneNum}
        handleSubmit={addPerson}
        handleNameChange={(e) => handleChange(e, "name")}
        handlePhoneChange={(e) => handleChange(e, "phone")}
      />

      <h3>Numbers</h3>
      <Search search={search} handleChange={handleSearch} />
      <Persons>
        {filteredPersons.map((person) => (
          <li style={{ display: "flex", gap: "8px" }} key={person.id}>
            <Person person={person} />
            <Button
              handleClick={() => deletePerson(person.id)}
              text={"delete"}
            />
          </li>
        ))}
      </Persons>
    </div>
  );
};

export default App;
