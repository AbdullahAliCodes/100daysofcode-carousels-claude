import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";

function App() {
  const notes = [
    {
      id: "a123",
      title: "different title one (1)",
      text: "some text1",
    },
    {
      id: "a123",
      title: "different title two (2)",
      text: "some text2",
    },
    {
      id: "a123",
      title: "some title (3)",
      text: "some text3",
    },
    {
      id: "a123",
      title: "some title (4)",
      text: "some text4",
    },
  ];
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form />
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
