import React from 'react'
import EntryLabel from './enterLabel'
import EntrySection from './entrySection'
import '../../../styles/paramEntrySection.css'
const ParamEntry = (props) => {
  return (
    <div className='param-entry' >
        <EntryLabel label_name={props.label_name}/>
        <EntrySection/>
    </div>
  )
}

export default ParamEntry