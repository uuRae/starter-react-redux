import CreateNote from "./features/notes/create";
import NotesList from "./features/notes/list";
import Quote from "./features/quote";
import SearchBar from "./features/search/search-bar";

function App() {
  return (
    <>
      <h1>My Notes</h1>
      <SearchBar />
      <CreateNote />
      <NotesList />
      <Quote />
    </>
  );
}

export default App;
