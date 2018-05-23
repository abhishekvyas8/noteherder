import React from 'react'

const Note = ({note, setCurrNote}) => {
    return(
        <li className = "Note" 
        onClick = {() => setCurrNote(note)}>
            <div className="note">
                <div className="note-title">
                    {note.title}
                </div>
                <div className="note-body" >
                <p>
                    {note.text}
                </p>
                </div>
            </div>
        </li>
    )
}

export default Note