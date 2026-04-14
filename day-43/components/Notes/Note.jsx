export default function Note(props) {
  return (
    <div
      className="note"
      id="${note.id}"
      // onmouseover="" onmouseout=""
    >
      <span className="material-symbols-outlined check-circle">
        check_circle
      </span>
      <div className="title">{props.title}</div>
      <div className="text">{props.text}</div>
      <div className="note-footer">
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
        <div className="tooltip">
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
}
