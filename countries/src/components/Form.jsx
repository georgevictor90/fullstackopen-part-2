import React from "react";

const Form = ({ search, handleSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      find countries
      <input type="text" value={search} onChange={handleSearch} />
    </form>
  );
};

export default Form;
