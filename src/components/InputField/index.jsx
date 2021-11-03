import React from 'react'
import Button from '@mui/material/Button';

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label>
        <input value={text} onChange={(e) => handleInput(e.target.value)}/>
        <Button variant="outlined" onClick={handleSubmit}>Add Todo</Button>
      </label>
    )
}

export default InputField
