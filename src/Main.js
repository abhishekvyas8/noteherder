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
            currNote: {
                title: 'Title your note',
                text: ''
            },

            noteList: [{title: 'Kohlrabi welsh', text: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.'},
            {title: 'Dandelion cucumber', text: 'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.'},
            {title: 'Prairie turnip', text: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.'}],
        }
    }
    setCurrNote = (note) => {
        this.setState({
            currNote: note
        });
    }
    
    receiveData = (data)=>{
        this.setState({
            note: data,
        })
    }
    
    render(){
        return(
            <div className = "Main" style = {style}>
                <Sidebar />
                <NoteList noteList = {this.state.noteList} setCurrNote = {this.setCurrNote}/>
                <NoteForm currNote = {this.state.currNote}/>
            </div>
        );
    }
   
};

export default Main;