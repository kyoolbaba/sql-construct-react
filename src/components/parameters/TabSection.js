import React from "react";
import { Tab } from "@mui/material";
import "../../styles/ScrollableSection.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedParam } from "../../Redux/parameter/parameterType";
const TabSection = (props) => {
  const selectedParam=useSelector(state=>state.parameterReducer.selectedParam)
  const dispatch=useDispatch()

  const handleClick=()=>{
    dispatch(setSelectedParam(props.label)) 
    
  }

  return (
    <div className={selectedParam === props.label ? "tab-outline" : ""}>
      <Tab
        className="tab-class"
        onClick={handleClick}  
        label={props.label}
      />
    </div>
  );
};

export default TabSection;
