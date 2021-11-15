import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete, editTodo } from '../../store/todoSlice';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem = ({ userid, id, text, completed }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const idBtn = open ? 'simple-popover' : undefined;

  const editTask = () => {
    dispatch(editTodo({ text, id }));
    handleClose();
  };
  function handleInput(e) {
    text = e.target.value;
  }
  const dispatch = useDispatch();

  if (userid === sessionStorage.getItem('currentloggedin')) {
    console.log(completed);
    return (
      <li style={{ margin: '10px' }}>
        <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete({ id }))} />
        <span>{text}</span>

        <Button variant="outlined" size="small" onClick={() => dispatch(removeTodo({ id }))} startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button aria-describedby={idBtn} variant="outlined" size="small" onClick={handleClick}>
          Edit Todo
        </Button>
        <Popover
          id={idBtn}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>
            <label>
              <TextField
                id="filled-basic"
                label="Edit todo"
                variant="standard"
                placeholder={text}
                onChange={handleInput}
              />
              <Button variant="text" onClick={editTask}>
                Save Todo
              </Button>
            </label>
          </Typography>
        </Popover>
      </li>
    );
  }
  return null;
};
export default TodoItem;