import React from 'react'
import './NoteForm.css';

const NoteForm = (props) => {
    return(
        <div className="NoteForm">
            <div className="form-actions">
            <button type="button">
                <i className="fa fa-trash-o"></i>
            </button>
            </div>
            <form>
            <p>
                <input
                type="text"
                name="title"
                placeholder= {props.currNote.title}
                />
            </p>
            
            <textarea name="body" value = {props.currNote.text} onChange = {(ev) => {this.updateText(ev)}}>
            </textarea>
            </form>
    </div>
    )
}

export default NoteForm;