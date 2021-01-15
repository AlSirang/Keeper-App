import React, { useState } from "react";

import Header from "./Header";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import Footer from "./Footer";

export default function App() {
    const [notes, setNotes] = useState([]);

    function AddNote(note) {
        setNotes((prevNotes) => [...prevNotes, note]);
    }
    function removeNote(id) {
        setNotes((prevNotes) =>
            prevNotes.filter((note, index) => index !== id)
        );
    }

    return (
        <div>
            <Header />
            <CreateNote addNote={AddNote} />
            <Notes notesList={notes} deleteNote={removeNote} />
            <Footer />
        </div>
    );
}
