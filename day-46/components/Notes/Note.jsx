import React, { useState } from "react";
// import Modal from "../Modal/Modal";

const Note = (props) => {
  const { toggleModal, note, setSelectedNote } = props;

  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [hoverActive, setHoverActive] = useState(false);

  const noteClickHandler = () => {
    toggleModal();
    setSelectedNote();
  };

  const noteMouseOverHandler = () => {
    setHoverActive(true);
  };
  const noteMouseOutHandler = () => {
    setHoverActive(false);
  };
  const deleteHandler = () => {
    props.deleteNote(note.id);
  };

  return (
    <div
      className="note"
      id={props.id}
      onClick={noteClickHandler}
      onMouseOver={noteMouseOverHandler}
      onMouseOut={noteMouseOutHandler}
    >
      {hoverActive && (
        <span className="material-symbols-outlined check-circle">
          check_circle
        </span>
      )}

      <div className="title">{title}</div>
      <div className="text">{text}</div>

      <div
        className="note-footer"
        style={{ visibility: hoverActive ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            add_alert
          </span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            person_add
          </span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            palette
          </span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            image
          </span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip" onClick={deleteHandler}>
          <span className="material-symbols-outlined hover small-icon archive">
            archive
          </span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">
            more_vert
          </span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
};

export default Note;
