import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;

  return (
    <div className="notes">
      {/* Conditional Outputting using ternary */}
      {notes.length === 0 ? (
        <p>Notes you add appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
    </div>
  );

  // <div className="notes">
  // {/* Conditional Outputting using && */}
  // {/* {notes.length === 0 && <p>Notes you add appear here.</p>}
  // {notes.length !== 0 &&
  //   notes.map((note, index) => (
  //     <Note key={index} id={note.id} title={note.title} text={note.text} />
  //   ))} */}

  // {/* Conditional Outputting using a regular if statement */}
  // if (notes.length === 0) {
  //   return (
  //     <div className="notes">
  //       <p>Notes you add appear here.</p>;
  //     </div>
  //   );
  // }
  // return (
  //   <div className="notes">
  //     {notes.map((note, index) => (
  //       <Note key={index} id={note.id} title={note.title} text={note.text} />
  //     ))}
  //   </div>
  // );
};

export default Notes;
