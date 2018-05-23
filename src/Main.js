import React from 'react'
import Sidebar from './Sidebar.js'
import NoteList from './NoteList.js'
import NoteForm from './NoteForm.js'
import base from './firebaseSetup.js'

const style = {
    display: 'flex',
    height: '100vh',
    aligntems: 'stretch',

}

class Main extends React.Component{
    constructor(){
        super();

        this.state = {
            currNote: this.blankNote(),

            noteList: JSON.parse(localStorage.getItem('noteList')),
        }
    }

    componentWillMount(){
        base.syncState('Notes', {
            context: this,
            state: 'noteList',
        })
    }
    
    blankNote = () => {
        return({
            id: 'null',
            title: '',
            text: '',
        });
    }

    setCurrNote = (note) => {
        this.setState({
            currNote: note
        });
    }

    saveNote = (note) => {
        const noteList = [...this.state.noteList];
        const idx = noteList.findIndex(currNote => currNote.id === note.id);
        
        if(idx === -1){
            note.id = Date.now();
            noteList.push(note);
        }
        else{
            const idx = noteList.findIndex(currNote => currNote.id === note.id);
            noteList[idx] = note;
        }

        localStorage.setItem('noteList', JSON.stringify(noteList));
        
        this.setState({
            currNote: note,
            noteList
        })        
    }

    resetCurrNote = () => {
        this.setCurrNote(this.blankNote());
    }
    
    deleteNote = (note) => {
        const noteList = [...this.state.noteList];
        const idx = noteList.indexOf(note);
    
        if(idx !== -1){
            noteList.splice(idx, 1);

            this.setState({
                currNote: this.blankNote(),
                noteList
            })

            localStorage.setItem('noteList', JSON.stringify(noteList));
        }
    }

    render(){
        return(
            <div className = "Main" style = {style}>
                <Sidebar resetCurrentNote = {this.resetCurrNote}/>
                <NoteList noteList = {this.state.noteList} setCurrNote = {this.setCurrNote}/>
                <NoteForm currNote = {this.state.currNote} saveNote = {this.saveNote} deleteNote = {this.deleteNote}/>
            </div>
        );
    }
   
};

export default Main;