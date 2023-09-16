import React from "react";

const Results = ({ countries, handleClick }) => {
  const results = countries.map((country) => (
    <li key={country.cca2}>
      {country.name.common}{" "}
      <button onClick={() => handleClick(country.cca2)}>show</button>
    </li>
  ));
  return <ul>{results}</ul>;
};

export default Results;
