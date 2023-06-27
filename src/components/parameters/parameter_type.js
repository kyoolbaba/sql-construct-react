import React, { useContext, useEffect, useReducer, useState } from "react";
import ParamEntry from "./entrySection/paramEntry";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
import { FormControl } from "@mui/material";
import "../../styles/parameterType.css";
import { MyContext } from "../../context/Mycontext";
import TextBox from "./TextBox";
import { useDispatch, useSelector } from "react-redux";
import { alterParameter } from "../../Redux/parameter/parameterType";
import { setCurrentParam } from "../../Redux/parameter/parameterType";
const ParameterType = (props) => {
  const {

    updateParameterParts,
    currentParam,
  } = useContext(MyContext);

  const currentParameter=useSelector(state=>state.parameterReducer.currentParam)
  const dispatch=useDispatch()
  console.log(currentParameter,"printing CUrre3nt parameter")

  const handleOptionsSelection = (e, st, key) => {
    // let ele = document.getElementById(st);
    // ele.innerText = e.target.innerText;
    // console.log(ele,e)

    changeParamValue(e, key , "");
  };


//   useEffect(() => {
//     console.log("Selected param selected");
//     console.log(currentParam);
//   }, [props.selectedParam]);

  let list_ = [];

  const changeParamValue = (event, key,inputType) => {
    console.log("Came to chagne")
    let current_param = currentParameter;
    if (inputType !== "TEXT") {

    console.log(currentParameter[props.paramJsonTree],"printing data json trree")
      console.log(props.paramJsonTree,key,event)
      current_param[props.paramJsonTree][key]=event.target.innerText
      dispatch(alterParameter(current_param))

      dispatch(setCurrentParam(current_param))
    } else {
    //   updateParameterParts(
    //     props.selectedParam,
    //     props.paramJsonTree,
    //     key,
    //     event.target.value
    //   );
    console.log(currentParameter[props.paramJsonTree],"printing data json trree")
      current_param[props.paramJsonTree][key]=event.target.value
      console.log("change not  ompleted")
    //   current_param[props.paramJsonTree][key] = event.target.value;
    dispatch(alterParameter(current_param))
    // console.log("fadfafasfsdff")
    dispatch(setCurrentParam(current_param))
    //   setCurrentParam(current_param)
    //   props.setData(current_param)
    console.log("change ompleted")
    }
  };

  for (let key in props.parameter) {
    let element;
    if (
      props.parameter.hasOwnProperty(key) &
      (props.parameter[key].type !== "Options") &
      props.parameter[key].display
    ) {
      element = (
        <div className="input-fields">
          {" "}
          <TextField
            fullWidth
            id={props.paramJsonTree+key+"-filled-basic"}
            label={key}
            variant="filled"
            autoComplete="off"
            onChange={(event) => changeParamValue(event, key, "TEXT")}
            value={currentParameter[props.paramJsonTree][key]}
            
          />{" "}
          {/* <TextBox
            key={key}
            paramJsonTree={props.paramJsonTree}
            changeParamValue={changeParamValue}
          />{" "} */}
        </div>
      );
    }
    if (
      (props.parameter[key].type === "Options") &
      props.parameter[key].display
    ) {
      element = (
        <div
          className="input-fields-options"
          id={props.heading_name + key + "-input-label"}
        ><FormControl fullWidth>
         
            <InputLabel
              label="Filled success"
              variant="filled"
              id={props.heading_name + key + "-simple-select-label"}
            >
              {key}
            </InputLabel>
            <Select
              fullWidth
              style={{ height: "65px" }}
              labelId="demo-simple-select-label"
              id={props.heading_name + key + "-simple-select"}
            //   defaultValue={props.parameter[key].options[0]}
              value={currentParameter[props.paramJsonTree][key]}
            >
              {props.parameter[key].options.map((val) => (
                <MenuItem
                  onClick={(event) =>
                    handleOptionsSelection(
                      event,
                      props.heading_name + key + "-simple-select",
                      key,
                    
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
        <ul className="parameter-type-list-1"> {list_}</ul>
      </div>
    </>
  );
};

export default ParameterType;
