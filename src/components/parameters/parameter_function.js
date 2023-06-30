import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import "../../styles/parameterType.css";
import { useDispatch, useSelector } from "react-redux";
import { alterParameter } from "../../Redux/parameter/parameterType";
import { setCurrentParam } from "../../Redux/parameter/parameterType";
const ParameterFunctionDetails = (props) => {
  const currentParameter = useSelector(
    (state) => state.parameterReducer.functionCurrentdefault
  );
  const dispatch = useDispatch();
//   console.log(currentParameter, "printing CUrre3nt parameter");

  const handleOptionsSelection = (e, st, key) => {
    changeParamValue(e, key, "");
  };

  let list_ = [];

  const changeParamValue = (event, key, inputType) => {
    console.log("Came to chagne");
    let current_param = currentParameter;
    if (inputType !== "TEXT") {
      console.log(
        currentParameter[props.paramJsonTree],
        "printing data json trree"
      );
      console.log(props.paramJsonTree, key, event);
      current_param[props.paramJsonTree][key] = event.target.innerText;
      dispatch(alterParameter(current_param));

      dispatch(setCurrentParam(current_param));
    } else {
      // console.log(currentParameter[props.paramJsonTree],"printing data json trree")
      current_param[props.paramJsonTree][key] = event.target.value;
      //   console.log("change not  ompleted")
      dispatch(alterParameter(current_param));
      dispatch(setCurrentParam(current_param));
      // console.log("change ompleted")
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
            id={props.paramJsonTree + key + "-filled-basic"}
            label={key}
            variant="filled"
            autoComplete="off"
            onChange={(event) => changeParamValue(event, key, "TEXT")}
            value={currentParameter[props.paramJsonTree][key]}
          />{" "}
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
        >
          <FormControl fullWidth>
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
                      key
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

export default ParameterFunctionDetails;
