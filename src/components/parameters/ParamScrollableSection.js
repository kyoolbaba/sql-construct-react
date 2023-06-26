import React, { useContext, useEffect } from "react";
// import Button from '../Button'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../../styles/ScrollableSection.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Tabs from "@mui/material/Tabs";
import "../../styles/ScrollableSection.css";
import { useState } from "react";
import TabSection from "./TabSection";
import { MyContext } from "../../Store/Mycontext";
import ParameterBody from "../../static/parameter_body";
import ParamListBody from "../../static/parameterListBody";
const ParamScrollableSection = (props) => {
  const [addNewParameter, setAddNewParameter] = useState("");
  const [dragItemIndex, setDragItemIndex] = useState("");
  const [dragOverItemIndex, setDragOverItemIndex] = useState("");
  const { setParamList, deleteParamInList, parameterList ,updateParameterList} =
    useContext(MyContext);

  const handleChangeAddNewParameter = (event) => {
    setAddNewParameter(event.target.value);
  };

  const onClickDelSelectedParam = (event) => {
    deleteParamInList(props.selectedParam);
    props.setSelectedParam("No Param Selected");
  };

  const addNewParam = (event) => {
    if (addNewParameter !== "") {
      // console.log(props.paramList)
      // let list_param = props.paramList;
      // list_param.push({ name: addNewParameter });

      // Handling lowercase extra space and unique keys for parameter names
      setParamList(
        ParamListBody(
          addNewParameter
            .toLowerCase()
            .split(" ")
            .filter((x) => x !== "")
            .join(" ")
        )
      );
    }
    setAddNewParameter("");
  };

  const enterButtonAddNewParam = (event) => {
    if (event.key == "Enter") {
      addNewParam(event);
    }
  };

  const handleDragStart = (event, index) => {
    setDragItemIndex(index);
    // console.log(event, index, "drag start");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    // setDragOverItemIndex(index)
    // console.log("drag over ");
  };

  const handleDrop = (index) => {
    console.log(`Move Items ${dragItemIndex} to the position `,index);
    const list_param=[...parameterList];
    const dragItem=list_param.splice(dragItemIndex,1)[0]
    list_param.splice(dragOverItemIndex,0,dragItem)

    updateParameterList(list_param)
    
    console.log(parameterList,dragItemIndex,dragOverItemIndex)
    setDragOverItemIndex(undefined);
    setDragItemIndex(undefined);
  };

  const handleOnDragEnd = () => {
    // setDragOverItemIndex(undefined);
    // setDragItemIndex(undefined);
  };
  const handleOnDragEnter = (index) => {
    console.log(index,"Drag Enter")
    setDragOverItemIndex(index);

  };
  const handleOnDragLeave = (event) => {

    // setDragOverItemIndex(undefined);
  };

  //   let list_ = [];
  //   for (let key in props.paramList) {
  //     let element;
  //     if (props.paramList.hasOwnProperty(key)) {
  //       // element=<EntryLabel  label_name={props.paramList[key].name} />
  //       element = (
  //         <div draggable>
  //           <TabSection
  //             setS={props.selectedParam}
  //             satSelected={props.setSelectedParam}
  //             label={props.paramList[key].name}
  //           />
  //         </div>
  //       );
  //     }
  //     list_.push(element);
  //   }

  return (
    <>
      <div className="scrollable-section-header">ParamScrollableSection</div>
      <div className="scrollable-section">
        {/* {list_} */}
        <Tabs
          //   value={value}
          //   onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          aria-label="scrollable prevent tabs example"
          orientation="vertical"
        >
          {/* {list_} */}
          {props.parameterList.map((val, idx) => {
            return (
              <div
                draggable
                className={"param_scrollable-" + idx}
                onDragStart={(event) => handleDragStart(event, idx)}
                onDragOver={(event) => handleDragOver(event)}
                onDragEnd={handleOnDragEnd}
                onDragEnter={()=>handleOnDragEnter(idx)}
                onDragLeave={handleOnDragLeave}
                onDrop={()=>handleDrop(idx)}
              >
                <TabSection
                  setS={props.selectedParam}
                  satSelected={props.setSelectedParam}
                  label={val}
                />
              </div>
            );
          })}
        </Tabs>
      </div>
      <div className="param-manupulate-section">
        <TextField
          id="outlined-basic"
          label="New parameter name"
          variant="outlined"
          value={addNewParameter}
          onKeyDown={enterButtonAddNewParam}
          onChange={handleChangeAddNewParameter}
        />
        <div className=" add-button ">
          <Button
            variant="contained"
            onClick={addNewParam}
            endIcon={<AddIcon />}
          >
            {" "}
            Add{" "}
          </Button>
        </div>
        <div className=" delete-button ">
          <Button
            startIcon={<DeleteIcon />}
            variant="contained"
            onClick={onClickDelSelectedParam}
          >
            {" "}
            Delete{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ParamScrollableSection;
