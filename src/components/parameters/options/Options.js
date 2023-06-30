import React, { useEffect, useState } from "react";
import "../../../styles/Options.css";
import { Button, Icon, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { addToOptionsList } from "../../../Redux/parameter/parameterType";

const Options = (props) => {
  // const selectedParam=useSelector(state=>state.parameterReducer.selectedParam)
  // const currentOptionsList=useSelector(state=>state.data[selectedParam].options)
  // console.log(currentOptionsList)
  const dispatch = useDispatch();
  const [optionName, setOptionName] = useState("");
  const [optionLabel, setOptionLabel] = useState("");

  const changeLabel = (event) => {
    // console.log("FROM OPTIONS LABEL");
    setOptionLabel(event.target.value);
  };

  const changeName = (event) => {
    // console.log("FROM OPTIONS NAME");
    // console.log(event);

    setOptionName(event.target.value);
  };

  const handleAddClick = (e) => {
    dispatch(addToOptionsList([optionName, optionLabel]));
    setOptionLabel("");
    setOptionName("");
  };

  return (
    <div className="option-outline">
      <div className="option-section">
        <TextField
          className="option-entry"
          label="name"
          value={optionName}
          onChange={changeName}
        />
        <TextField
          className="option-entry"
          label="label"
          value={optionLabel}
          onChange={changeLabel}
        />
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={handleAddClick}
        >
          {" "}
          Add Options{" "}
        </Button>
      </div>
    </div>
  );
};

export default Options;
