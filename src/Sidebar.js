import React from 'react'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'

    /*
.Sidebar a:hover img.outline {
  opacity: 0;
}
*/

const style = {
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    logo: {
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',
    },

    logoImage: {
        width: '3rem',
        paddingLeft: '0.4rem',
    },

    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '4rem',
    },

    button: {
        backgroundColor: 'transparent',
        border: '0rem',
        color: '#008BF8',
        cursor: 'pointer',
        outline: 'none',
    },

    signOut: {
        position: 'absolute',
        bottom: '1rem',
    },

    i: {
        fontSize: '2rem',
    },
    
    aImage: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
        opacity: ''
    }
}


class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            aImageHover: {
                position: 'absolute',
                left: '0',
                width: '100%',
                transition: 'opacity 0.25s ease-in-out',
                opacity: '',
            }
        }
    }

    handleEnter(){
        let tempStyle = Object.assign({}, this.state.aImageHover);
        tempStyle.opacity = '0';
        
        this.setState({
            aImageHover: tempStyle,
        })
    }

    handleLeave(){
        let tempStyle = Object.assign({}, this.state.aImageHover);
        tempStyle.opacity = '';
        
        this.setState({
            aImageHover: tempStyle,
        })
    }

    render(){
        return(
            <nav className="Sidebar" style = {style.sidebar}>
                <div className="logo" style = {style.logo}>
                    <img src={quill} alt="Noteherder"  style = {style.logoImage}/>
                </div>
                <a className="new-note" href="/notes" style = {style.newNote} 
                    onMouseEnter = {()=> this.handleEnter()} onMouseLeave = {()=> this.handleLeave()}
                    onClick = {(ev) => {
                        ev.preventDefault();
                        this.props.resetCurrentNote();
                    }}
                >
                    <img src={newHover} alt="New note" style = {style.aImage}/>
                    <img className="outline" src={newIcon} alt="New note" style = {this.state.aImageHover} />
                </a>
                <div className="SignOut" style = {style.signOut}>
                    <button style = {style.button}>
                        <i className="fas fa-sign-out-alt" title = "sign out" style = {style.i}></i>
                    </button>
                </div>
            </nav>
        )
    }
    
}

export default Sidebar;