const Search = ({ searchText, onChange }) => {
  return (
    <input
      type="text"
      value={searchText}
      onChange={onChange}
      placeholder="search by order Id..."
    />
  );
};

export default Search;
