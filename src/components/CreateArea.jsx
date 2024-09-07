import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [zoomedIn, setZoomIn] = useState(false);
  
  const {title,content} = note;
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    if(title === "" && content === "") {
      return;
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    
  }

  function expand() {
    setZoomIn(true);
  }

  return (
    <div>
      <form className="create-note">
        {zoomedIn && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            style={{fontSize : '18px'}}
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={zoomedIn ? 3 : 1}
          style={{ fontSize : '16px'}}
        />
        <Zoom in={zoomedIn}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
