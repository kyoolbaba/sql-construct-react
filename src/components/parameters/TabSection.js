import React ,{useState}from 'react'
import ThemeProvider from '@mui/material'
import { Tab } from '@mui/material'
import '../../styles/ScrollableSection.css'
import createTheme from '@mui/material'
const TabSection = (props) => {
    const label=props.label
    const onClickSelectedParam=(event)=>{
        console.log("Milan")
        props.satSelected(props.label)
        console.log(label)
        console.log(props.setS)
    }

  return (
    <div  className={props.setS === props.label ? 'tab-outline' :''}>
    <Tab  className='tab-class' onClick={onClickSelectedParam} label={props.label}   />
    </div>
  )
}

export default TabSection