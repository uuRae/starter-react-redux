import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, setSearchTerm } from "../search.slice";

export default function SearchBar() {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  function handleChange({ target: { value } }) {
    dispatch(setSearchTerm(value));
  }

  return (
    <form>
      <label htmlFor="search">Search your notes: </label>
      <input
        id="search"
        name="search"
        onChange={handleChange}
        placeholder="e.g., state"
        type="search"
        value={searchTerm}
      />
    </form>
  );
}
