import React from 'react'

export const NewComp = () => {
    const users = ['mike', 'travis']
    return (
        <div>
            <ul>{user.map(user =><li key={user}>{user}</li>)}</ul>
        </div>
    )
}
