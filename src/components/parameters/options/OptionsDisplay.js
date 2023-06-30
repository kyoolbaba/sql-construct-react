import { Button } from '@mui/base'
import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from "@mui/icons-material/Delete";
import "../../../styles/Options.css"
import { resetOptionsList } from '../../../Redux/parameter/parameterType';

const OptionsDisplay = (props) => {
    const selectedParam=useSelector(state=>state.parameterReducer.selectedParam)
    const options=useSelector(state=>state.parameterReducer.data[selectedParam].options)
    const dispatch=useDispatch()
    console.log(options)

const handleDelete=(event,key)=>{

    let option=options
    delete option[key]
    dispatch(resetOptionsList(option))


}


    let list_=[]


    
for (const key in options){
    if (options.hasOwnProperty(key)){
        console.log(`${key}`,options[key])

        list_.push(<div className='options-display-section' >
        <TextField
        id={`${selectedParam}-${key}-options-name`}
        className=' options-editable-section-name '
        value={key}
        label="Option Name"
        />
        <TextField
        className=' options-editable-section-label '
        id={`${selectedParam}-${key}-options-label`}
        value={options[key]}
        label="Option Label"
        />
<DeleteIcon className='option-delete-icon' onClick={(e)=>handleDelete(e,key)} />

        </div>)
    }
}
  return (
    <div className='options-list-section'>
        {list_}
    </div>
  )
}

export default OptionsDisplay