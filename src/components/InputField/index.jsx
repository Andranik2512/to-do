import React from 'react'

import { TextField,Button } from "@mui/material";


const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label>
        <TextField 
         id="filled-basic" label="Add todo" variant="standard"
        value={text} 
        onChange={(e) => handleInput(e.target.value)}/>
        <Button variant="contained" onClick={handleSubmit}>Add Todo</Button>
      </label>
    )
}

export default InputField
