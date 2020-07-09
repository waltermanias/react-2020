import React from 'react';

const userInput = (props) => {
    return <input onChange={props.changed} type="text" value={props.username}></input>
}

export default userInput;