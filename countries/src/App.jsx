import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import countriesServices from "./services/countries";
import Results from "./components/Results";
import Country from "./components/Country";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  useEffect(() => {
    countriesServices.getAll().then((countries) => setCountries(countries));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSelectedCountryId(null);
  };

  const filterCountries = () => {
    if (selectedCountryId) {
      return countries.filter((country) => country.cca2 === selectedCountryId);
    }
    if (search.trim() === "") return [];

    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  };

  const renderResults = () => {
    if (filteredCountries.length > 10)
      return <div>Too many matches, specify another filter</div>;

    if (filteredCountries.length > 1)
      return (
        <Results
          countries={filteredCountries}
          handleClick={(id) => setSelectedCountryId(id)}
        />
      );

    if (filteredCountries.length === 1)
      return <Country country={filteredCountries.at(0)} />;
  };

  const filteredCountries = filterCountries();

  return countries ? (
    <div>
      <Form search={search} handleSearch={handleSearch} />

      {renderResults()}
    </div>
  ) : (
    <div>Loading countries</div>
  );
};

export default App;
