import React from 'react';
import { useState } from 'react';
import {} from 'react-router-dom';
import Users from '../Users.json';

import { TextField, } from "@mui/material";

export default function Home(props) {
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');
  const sign = () => {
    for (const i of Users) {
      if (i.password === password && i.login === login) {
        props.history.push('/todos');
        sessionStorage.setItem('currentloggedin', i.id);
        return;
      }
    }
    alert('Введите правильны логин или пароль');
  };

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        sign();
      }}
    >
      <div>
        <TextField
        id="filled-basic" 
        label="Required field" 
        variant="filled"
      
          value={login}
          onChange={(event) => {
            setlogin(event.target.value);
          }}
        />
      </div>
      <div>
        <TextField
        id="filled-basic" 
        label="Required field" 
        variant="filled"
          
          value={password}
          onChange={(event) => {
            setpassword(event.target.value);
          }}
          type="password"
        />
      </div>
      <button>Sign in</button>
    </form>
  );
}
