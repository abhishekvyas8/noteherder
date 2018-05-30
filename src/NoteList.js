import React from 'react'
import './NoteList.css';
import Note from './Note.js'

const NoteList = ({noteList}) => {
    return(
        <div className="NoteList" >
            <h3 >Notes</h3>
            <ul id="notes" >

            {  
                noteList.map(note => {
                return(
                    <Note note = {note}  key = {noteList.indexOf(note)}/>
                )
            })}
            </ul>
        </div>
    )
}

export default NoteList;