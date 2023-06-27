import { TextField } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../context/Mycontext'

const TextBox = (props) => {
    const {currentParam,setCurrentParam}=useContext(MyContext)

    useEffect(()=>{console.log(props,"printing props")},[])
  return (
    <TextField
    fullWidth
    id="filled-basic"
    label={props.key}
    variant="filled"
    autoComplete="off"
    onChange={(event)=>props.changeParamValue(event,props.key,"TEXT")}
    defaultValue={currentParam[props.paramJsonTree][props.key]}
  />
  )
}

export default TextBox