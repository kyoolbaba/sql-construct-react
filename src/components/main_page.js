import "../styles/mainPage.css";
import "../styles/parameterSection.css";
import React, { Component, useContext, useState } from "react";
import Button from "./Button";
import ParameterHeader from "./parameters/parameter_header";
import ParameterType from "./parameters/parameter_type";
import ParameterValue from "./parameters/parameter_value";
import ParamScrollableSection from "./parameters/ParamScrollableSection";
import { param_details, function_details } from "../static/parameters";
import { MyContext } from "../context/Mycontext";
import { useSelector } from "react-redux";

const MainPage = (props) => {
  // Initializing Variables (static value)
  const { paramList, updateParamaterList ,currentParam} =
    useContext(MyContext);
  const parameterValue=useSelector(state=>state.data)
  const parameterList=useSelector(state=>state.parameterReducer.parameterList)
  const [data, setData] = useState(currentParam);
  // const [selectedParam, setSelectedParam] = useState("No Params");
  const selectedParam= useSelector(state=>state.parameterReducer.selectedParam);
  return (
    <>
      <div className="main-page">{props.heading}</div>
      <div>Selected Param {selectedParam}</div>
      <div className="param-section">
        <div className="param-scrollable-section">
          <ParamScrollableSection
            parameterList={parameterList}
            // setSelectedParam={setSelectedParam}
            selectedParam={selectedParam}
            paramList={parameterValue}
            setParamList={updateParamaterList}
          />
        </div>
        {parameterList.indexOf(selectedParam) !== -1 && (
          <div className="parameter-section">
            <div className="parameter-type">
              {" "}
              <ParameterType
                // paramList={paramList.data[selectedParam].default}
                function_name={selectedParam}
                data={data}
                setData={setData}
                heading_name={"Parameter Type"}
                paramJsonTree={"parameter_type"}
                selectedParam={selectedParam}
                parameter={param_details.parameter_type}
              />
            </div>
            <div className="parameter-type">
              {" "}
              <ParameterType
                // paramList={paramList.data[selectedParam].parameter_header}
                function_name={selectedParam}
                data={data}
                setData={setData}
                paramJsonTree={"parameter_header"}
                heading_name={"Parameter Header"}
                selectedParam={selectedParam}
                parameter={param_details.parameter_header}
              />
            </div>
            <div className="parameter-type">
              {" "}
              <ParameterType
                paramList={paramList}
                data={data}
                setData={setData}
                function_name={selectedParam}
                paramJsonTree={"parameter_value"}
                heading_name={"Parameter Value"}
                selectedParam={selectedParam}
                parameter={param_details.parameter_value}
              />
            </div>
          </div>
        )}
      </div>
      <Button name="Submit" />
    </>
  );
};
export default MainPage;
