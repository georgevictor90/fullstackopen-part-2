import { useState } from "react";
import Form from "./components/Form";
import Search from "./components/Search";
import Persons from "./components/Persons";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [search, setSearch] = useState("");

  const addNameToPhonebook = (e) => {
    e.preventDefault();

    if (nameAlreadyExists())
      return alert(`${newName} is already added to phonebook`);

    setPersons([...persons, { name: newName, number: phoneNum }]);
    setNewName("");
    setPhoneNum("");
  };

  const nameAlreadyExists = () => {
    return persons.find((person) => person.name === newName);
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
        handleSubmit={addNameToPhonebook}
        handleNameChange={(e) => handleChange(e, "name")}
        handlePhoneChange={(e) => handleChange(e, "phone")}
      />

      <h3>Numbers</h3>
      <Search search={search} handleChange={handleSearch} />
      <Persons>
        {filteredPersons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </Persons>
    </div>
  );
};

export default App;
