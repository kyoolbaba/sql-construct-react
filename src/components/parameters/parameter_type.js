import React, { useContext, useState } from "react";
import ParamEntry from "./entrySection/paramEntry";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
import { FormControl } from "@mui/material";
import { MyContext } from "../../Store/Mycontext";
import "../../styles/parameterType.css";
const ParameterType = (props) => {
  const [selectOptions, setSelectedOptions] = useState();
  const {paramList,setParamList,updateParameterParts}=useContext(MyContext)
  const handleOptionsSelection = (e, st,key) => {
    let ele = document.getElementById(st);
    // console.log(ele,st,e)
    ele.innerText = e.target.innerText;

    changeParamValue(e,key)
  };
  let list_ = [];

  const changeParamValue=(event , key,inputType)=>{
    console.log(key,"is getting changed",props.paramJsonTree,)
    // console.log(paramList.data[props.paramJsonTree][key])
    console.log(paramList.data[props.selectedParam][props.paramJsonTree][key],"printing ")
    if (inputType!=="TEXT"){
        console.log(event.target.innerText)
        updateParameterParts(props.selectedParam, props.paramJsonTree,key,event.target.innerText)
    }
    else{
        console.log(event.target.value)
        updateParameterParts( props.selectedParam,props.paramJsonTree,key,event.target.value)
    }
    



  }

  for (let key in props.parameter) {
    let element;
    if (
      props.parameter.hasOwnProperty(key) &
      (props.parameter[key].type !== "Options")
    ) {
      element = (
        <div className="input-fields">
          {" "}
          <TextField
            fullWidth
            id="filled-basic"
            label={key}
            variant="filled"
            onChange={(event)=>changeParamValue(event,key,"TEXT")}
          />{" "}
        </div>
      );
    }
    if (props.parameter[key].type === "Options") {
      element = (
        <div
          className="input-fields-options"
          id={props.heading_name + key + "-input-label"}
        >
          <FormControl fullWidth>
            <InputLabel
              label="Filled success"
              variant="filled"
              id={props.heading_name + key + "-simple-select-label"}
            >
              {key}
            </InputLabel>
            {/* <div>{key}</div> */}
            <Select
              fullWidth
              style={{ height: "65px" }}
              labelId="demo-simple-select-label"
              id={props.heading_name + key + "-simple-select"}
              // id="demo-simple-select"
              value={props.parameter[key].options[0]}
              // label="efasef"
              //   onChange={(event) =>
              //     handleOptionsSelection(
              //       event,
              //       props.heading_name + key + "-simple-select"
              //     )
              //   }
            >
              {props.parameter[key].options.map((val) => (
                <MenuItem
                  onClick={(event) =>
                    handleOptionsSelection(
                      event,
                      props.heading_name + key + "-simple-select",key
                    )
                  }
                  value={val.toString()}
                >
                  {val.toString()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
    }
    list_.push(element);
  }
  return (
    <>
      <div className="parameter-section-1">
        <div>{props.heading_name}</div>
        <ul className="parameter-type-list-1">{list_}</ul>
      </div>
    </>
  );
};

export default ParameterType;
