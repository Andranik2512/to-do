import React from 'react'
import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodoComplete} from '../../store/todoSlice'

import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({userid, id, text, completed, }) => {
    const dispatch = useDispatch();
    if(userid === sessionStorage.getItem('currentloggedin')){
        
    
console.log(completed);
    return (
        <li>
            <input 
           type='checkbox' 
           checked={completed}
           onChange={() => dispatch(toggleTodoComplete({id}))}
           />
           <span>{text}</span>
           <span className='delete' onClick={()=> dispatch(removeTodo({id}))}>
               <buttom>
               <DeleteIcon /> 
               </buttom>
           </span>   
        </li>
    )
}
return null;
}
export default TodoItem
