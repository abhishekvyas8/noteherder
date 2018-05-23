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

            noteList: [{id: '1', title: 'Kohlrabi welsh', text: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.'},
            {id: '2', title: 'Dandelion cucumber', text: 'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.'},
            {id: '3', title: 'Prairie turnip', text: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.'}],
        }
    }
    
    blankNote = () => {
        return({
            id: 'null',
            title: 'Title your note',
            text: '',
        });
    }

    setCurrNote = (note) => {
        this.setState({
            currNote: note
        });
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
                <NoteForm currNote = {this.state.currNote}/>
            </div>
        );
    }
   
};

export default Main;