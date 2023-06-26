import { FormControl, MenuItem, Select } from '@mui/base'
import { InputLabel } from '@mui/material'
import React, { useState } from 'react'

const OptionsSection = (props) => {
    const [key,setKey]=useState()
  return (<div className="input-fields">
         <FormControl fullWidth>
        <InputLabel label="Filled success" variant="filled"  id="demo-simple-select-label">{props.key}</InputLabel>
        <Select fullWidth
    labelId="demo-simple-select-label"
    id="demo-simple-select"
        // id="demo-simple-select"
        value={10}
        // label="efasef"
        // onChange={selectOptions}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      </FormControl>
      </div>
  )
}

export default OptionsSection