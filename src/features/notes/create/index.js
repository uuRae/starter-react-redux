import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../notes.slice';

export default function CreateNote() {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addNote(note));
  }

  function handleChange({ target: { value } }) {
    setNote(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="note">Create a note: </label>
      <input
        id="note"
        name="note"
        onChange={handleChange}
        placeholder="e.g., my new note"
        type="text"
        value={note}
      />
      <input type="submit" />
    </form>
  );
}