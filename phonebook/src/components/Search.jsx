const Search = ({ search, handleChange }) => {
  return (
    <div>
      Search:
      <input type="text" value={search} onChange={handleChange} />
    </div>
  );
};

export default Search;
