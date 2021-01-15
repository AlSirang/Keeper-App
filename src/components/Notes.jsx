import React from "react";
import Note from "./Note";

export default function Notes({ notesList, deleteNote }) {
    return notesList.map((note, index) => (
        <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onRemove={deleteNote}
        />
    ));
}
