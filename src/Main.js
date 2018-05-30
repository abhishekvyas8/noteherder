import React from 'react'
import { Switch, Route } from 'react-router-dom';
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

            noteList: []
        }
    }

    componentWillMount(){
        base.syncState(`notes/${this.props.uid}`, {
            context: this,
            state: 'noteList',
            asArray: true,
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
        let shouldRedirect = false;
        const noteList = [...this.state.noteList];
        const idx = noteList.findIndex(currNote => currNote.id === note.id);
        
        if(idx === -1){
            note.id = Date.now();
            noteList.push(note);
            shouldRedirect = true;
        }
        else{
            noteList[idx] = note;
        }
        
        this.setState({
            noteList
        },
        () => {
            if(shouldRedirect){
                this.props.history.push(`/notes/${note.id}`);
            }
        }
        )   
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
        }
    }

    render(){
        return(
            <div className = "Main" style = {style}>
                <Sidebar resetCurrentNote = {this.resetCurrNote} signOut = {this.props.signOut}/>
                <NoteList noteList = {this.state.noteList}/>
                {/* <NoteForm currNote = {this.state.currNote} saveNote = {this.saveNote} deleteNote = {this.deleteNote}/> */}

                <Switch>
                    <Route 
                        path = "/notes/:id"
                        render = {(navProps)=> (
                            <NoteForm currNote = {this.state.currNote} saveNote = {this.saveNote} deleteNote = {this.deleteNote} noteList = {this.state.noteList}{...navProps}/>
                        )}
                    />
                    <Route 
                        render = {(navProps)=> (
                            <NoteForm currNote = {this.state.currNote} saveNote = {this.saveNote} deleteNote = {this.deleteNote} noteList = {this.state.noteList} {...navProps}/>
                        )}
                    />
                </Switch>
            </div>
        );
    }
   
};

export default Main;