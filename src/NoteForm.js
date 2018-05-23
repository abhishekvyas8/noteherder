import React from 'react'
import './NoteForm.css';

const NoteForm = ({currNote, saveNote, deleteNote}) => {

    const handleChanges = (ev) => {
        const note = {...currNote};
        note[ev.target.name] = ev.target.value;
        saveNote(note);
    }

    return(
        <div className="NoteForm">
            <div className="form-actions">
            <button type="button" onClick = {(ev) => {
                ev.preventDefault();
                deleteNote(currNote);
            }}>
                <i className="fa fa-trash-alt"></i>
            </button>
            </div>
            <form>
                <p>
                    <input
                    type="text"
                    name="title"
                    placeholder = "Title your note"
                    value= {currNote.title}
                    onChange = {handleChanges}
                    />
                </p>
                
                <textarea name="text" value = {currNote.text} onChange = {handleChanges}>
                </textarea>
            </form>
    </div>
    )
}

export default NoteForm;