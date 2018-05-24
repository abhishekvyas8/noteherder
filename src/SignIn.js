import React from 'react';

const SignIn = ({handleAuth}) => {
    return(
        <div className = "SignIn">
            <button onClick = {handleAuth}>Sing In </button>
        </div>
    )
}

export default SignIn;