import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import InputField from '../components/InputField'
import TodoList from '../components/TodoList'
import { addTodo } from '../store/todoSlice';

export default function Todos() {
    const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('');
  };
    return (
        
        <div>
            <InputField text={text} handleInput={setText} handleSubmit={addTask} />
            <TodoList   />
        </div>
    )
}
