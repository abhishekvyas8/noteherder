import React from 'react'
import './NoteList.css';


class NoteList extends React.Component{
    constructor(){
        super();

        this.state = {
            noteList: [{title: 'Kohlrabi welsh', text: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.'},
                       {title: 'Dandelion cucumber', text: 'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.'},
                       {title: 'Prairie turnip', text: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.'}]
        }
    }

    handelClick(note){
        this.props.callBackParent(note);
    }

    render(){
        return(
            <div className="NoteList" >
            <h3 >Notes</h3>
            <ul id="notes" >

            {this.state.noteList.map(note => {
                return(
                    <a key = {this.state.noteList.indexOf(note)}>
                        <li >
                        <div className="note" onClick = {() => this.handelClick(note)}>
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
                    </a>
                )
            })}
            </ul>
          </div>
        )
    }
    
}

export default NoteList;