import React, { useContext, useState } from "react";
import ThemeProvider from "@mui/material";
import { Tab } from "@mui/material";
import "../../styles/ScrollableSection.css";
import createTheme from "@mui/material";
import { MyContext } from "../../context/Mycontext";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedParam } from "../../store/parameter/parameterType";
const TabSection = (props) => {
  const {paramList, currentParam, setCurrentParam } = useContext(MyContext);
  const label = props.label;
  const selectedParam=useSelector(state=>state.parameterReducer.selectedParam)
  const dispatch=useDispatch()
  const onClickSelectedParam = (event) => {
    // console.log(currentParam)
    // console.log(paramList,'asede',props.label)
    setCurrentParam(paramList.data[props.label])
    // console.log(currentParam)
    props.satSelected(props.label);
    // console.log(label);
    // console.log(props.setS);
  };

  return (
    <div className={selectedParam === props.label ? "tab-outline" : ""}>
      <Tab
        className="tab-class"
        onClick={()=>{dispatch(setSelectedParam(props.label))}}
        label={props.label}
      />
    </div>
  );
};

export default TabSection;
