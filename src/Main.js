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
            note: {
                title: 'Title your note',
                text: '',
            }
        }
    }
    
    receiveData = (data) => {
        let tempNote = Object.assign({}, this.state.note);
        tempNote.title = data.title;
        tempNote.text = data.text;

        this.setState({
            note: tempNote,
        })

        
    }
    
    render(){
        return(
            <div className = "Main" style = {style}>
                <Sidebar />
                <NoteList callBackParent = {this.receiveData}/>
                <NoteForm note = {this.state.note}/>
            </div>
        );
    }
   
};

export default Main;