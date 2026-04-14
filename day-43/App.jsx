import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";

function App() {
  const notes = [
    {
      id: "a123",
      title: "some title1",
      text: "some text1",
    },
    {
      id: "a123",
      title: "some title2",
      text: "some text2",
    },
    {
      id: "a123",
      title: "some title3",
      text: "some text3",
    },
    {
      id: "a123",
      title: "some title4",
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
