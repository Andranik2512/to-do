import React from "react";
import { useState } from "react";
import {}from 'react-router-dom' 
import Users from "../Users.json";



export default function Home(props) {
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');
  const sign = () => {
    for (const i of Users) {
        
      if (i.password === password && i.login === login ) {
          console.log(props);
          
          props.history.push("/todos")

          return
      }
    }
    alert('Введите правильны логин или пароль')
  };

  return (
    <form
      onSubmit={(event ) => {
          event.preventDefault();
        sign()
      }}
    >
      <div>
        <input value={login} 
        onChange={(event)=>{
            setlogin(event.target.value)
            }}/>
      </div>
      <div>
        <input value={password} onChange={(event)=>{
           setpassword(event.target.value) 
        }} type='password'/>
      </div>
      <button>sign in</button>
    </form>
  );
}
