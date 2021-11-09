import React from 'react'
import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodoComplete} from '../../store/todoSlice'

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';

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
               <DeleteForeverTwoToneIcon /> 
               </buttom>
               <buttom>
               <ModeEditOutlineTwoToneIcon color="action"/> 
               </buttom>
           </span>   
        </li>
    )
}
return null;
}
export default TodoItem
