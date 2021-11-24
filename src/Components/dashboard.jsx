import React from 'react'

function dashboard(logIn, username) {
    return (
        <div>
            
{logIn && 
    <h1>Logged in as {username}</h1> 
}
        </div>
    )
}

export default dashboard
