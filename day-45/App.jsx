import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";

const NOTES = [
  // {
  //   id: "a123",
  //   title: "different title one (1)",
  //   text: "some text1",
  // },
  // {
  //   id: "a122",
  //   title: "different title one 21)",
  //   text: "some text2",
  // },
];

function App() {
  const [notes, setNotes] = useState(NOTES);

  const addNote = (note) =>
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Modal />
      <Notes notes={notes} />
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
