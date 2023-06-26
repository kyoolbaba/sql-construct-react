import "../styles/mainPage.css";
import "../styles/parameterSection.css";
import React, { Component, useContext, useState } from "react";
import Button from "./Button";
import ParameterHeader from "./parameters/parameter_header";
import ParameterType from "./parameters/parameter_type";
import ParameterValue from "./parameters/parameter_value";
import ParamScrollableSection from "./parameters/ParamScrollableSection";
import { param_details, function_details } from "../static/parameters";
import { MyContext } from "../Store/Mycontext";

const MainPage = (props) => {
  // Initializing Variables (static value)
  const { paramList, updateParamaterList, parameterList } =
    useContext(MyContext);
  const [selectedParam, setSelectedParam] = useState("No Params");
  return (
    <>
      <div className="main-page">{props.heading}</div>
      <div>Selected Param {selectedParam}</div>
      <div className="param-section">
        <div className="param-scrollable-section">
          <ParamScrollableSection
          parameterList={parameterList}
            setSelectedParam={setSelectedParam}
            selectedParam={selectedParam}
            paramList={paramList.data}
            setParamList={updateParamaterList}
          />
        </div>
        <div className="parameter-section">
          <div className="parameter-type">
            {" "}
            <ParameterType
              function_name={selectedParam}
              heading_name={"Parameter Type"}
              paramJsonTree={"default"}
              selectedParam={selectedParam}
              parameter={param_details.default}
            />
          </div>
          <div className="parameter-type">
            {" "}
            <ParameterType
              function_name={selectedParam}
              paramJsonTree={"parameter_header"}
              heading_name={"Parameter Header"}
              selectedParam={selectedParam}
              parameter={param_details.parameter_header}
            />
          </div>
          <div className="parameter-type">
            {" "}
            <ParameterType
              function_name={selectedParam}
              paramJsonTree={"parameter_value"}
              heading_name={"Parameter Value"}
              selectedParam={selectedParam}
              parameter={param_details.parameter_value}
            />
          </div>
        </div>
      </div>
      <Button name="Submit" />
    </>
  );
};
export default MainPage;
