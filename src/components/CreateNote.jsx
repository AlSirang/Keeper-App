import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateNote = ({ addNote }) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setNote((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        addNote(note);
        setNote({ title: "", content: "" });
    }
    return (
        <>
            <form className="create-note">
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    placeholder="Title"
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    placeholder="Take a Note..."
                    rows="3"
                    value={note.content}
                    onChange={handleChange}></textarea>
                <Zoom in={true}>
                    <Fab onClick={handleSubmit}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </>
    );
};

export default CreateNote;
