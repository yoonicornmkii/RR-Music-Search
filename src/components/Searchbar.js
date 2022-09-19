import { useState } from "react";
// import { SearchContext } from "../context/SearchContext";

function SearchBar({ handleSearch }) {
  const [term, setTerm] = useState("");
  // const { term, handleSearch } = useContext(SearchContext);

  return (
    <form>
      <input
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        placeholder="Search Here"
      />
      <button onClick={(e) => handleSearch(e, term)}>Submit</button>
    </form>
  );
}

export default SearchBar;
