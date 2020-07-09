import React, { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

const app = () => {

    const [username, setUsername]= useState("walter.manias");

    const changeNameHandler = (event) => {
      setUsername(event.target.value)
    }

    return (
      <div className="App">
        <UserInput username={username} changed={changeNameHandler.bind(this)}></UserInput>
        <UserOutput username={username}></UserOutput>
        <UserOutput username={username}></UserOutput>
        <UserOutput username={username}></UserOutput>
      </div>
    );
}

export default app;
