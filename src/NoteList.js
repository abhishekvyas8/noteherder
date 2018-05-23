import React from 'react'
import './NoteList.css';
import Note from './Note.js'

const NoteList = ({noteList, setCurrNote}) => {
    return(
        <div className="NoteList" >
        <h3 >Notes</h3>
        <ul id="notes" >

        {noteList.map(note => {
            return(
                <Note note = {note} setCurrNote= {setCurrNote}  key = {noteList.indexOf(note)}/>
            )
        })}
        </ul>
        </div>
    )
}

export default NoteList;