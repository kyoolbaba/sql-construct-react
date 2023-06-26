import React from 'react'

const EntryLabel = (props) => {
    let label=props.label_name
  return (
    <div className={"label-"+props.label_name+ " entry-label"}>{props.label_name}</div>
  )
}

export default EntryLabel