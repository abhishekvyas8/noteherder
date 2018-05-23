import React from 'react'
import Sidebar from './Sidebar.js'
import NoteList from './NoteList.js'
import NoteForm from './NoteForm.js'

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

            noteList: [],
        }
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
            note.id = noteList.length + 1;
            noteList.push(note);
        }
        else{
            const idx = noteList.findIndex(currNote => currNote.id === note.id);
            noteList[idx] = note;
        }
        
        this.setState({
            currNote: note,
            noteList
        })        
    }

    resetCurrNote = () => {
        this.setCurrNote(this.blankNote());
    }
    
    receiveData = (data)=>{
        this.setState({
            note: data,
        })
    }
    
    render(){
        return(
            <div className = "Main" style = {style}>
                <Sidebar resetCurrentNote = {this.resetCurrNote}/>
                <NoteList noteList = {this.state.noteList} setCurrNote = {this.setCurrNote}/>
                <NoteForm currNote = {this.state.currNote} saveNote = {this.saveNote}/>
            </div>
        );
    }
   
};

export default Main;