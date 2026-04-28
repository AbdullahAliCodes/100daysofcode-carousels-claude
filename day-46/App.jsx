import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";

const NOTES = [];

function App() {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) =>
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return id !== note.id;
      });
    });
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Modal isModalOpen={isModalOpen} selectedNote={selectedNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
    </div>
  );
}

export default App;

// Using Arrow functions vs Regular functions

// regular functions are calleable and constructible
// "this" inside a regular function is bound to the function
// arrow functions only on return statement
// which to use, depends on the context

// More: arrow functions are a concise way to write function expressions
// good for simple functions that you use only once
// (parameters) => some code
