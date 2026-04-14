import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  return (
    <div className="notes">
      <Note
        id={props.notes[0].id}
        title={props.notes[0].title}
        text={props.notes[0].text}
      />
      <Note
        id={props.notes[1].id}
        title={props.notes[1].title}
        text={props.notes[1].text}
      />
      <Note
        id={props.notes[2].id}
        title={props.notes[2].title}
        text={props.notes[2].text}
      />
      <Note
        id={props.notes[3].id}
        title={props.notes[3].title}
        text={props.notes[3].text}
      />
    </div>
  );
};

export default Notes;
