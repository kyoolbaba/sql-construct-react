import "../styles/mainPage.css";
import "../styles/parameterSection.css";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ParameterType from "./parameters/parameter_type";
import ParamScrollableSection from "./parameters/ParamScrollableSection";
import { param_details, function_details } from "../static/parameters";
import { useDispatch, useSelector } from "react-redux";
import Options from "./parameters/options/Options";
import OptionsDisplay from "./parameters/options/OptionsDisplay";
import { Tab, TextField } from "@mui/material";
import {
  resetAllData,
  resetCurrentParameter,
  resetParamList,
  setCurrentParam,
  toggleSection,
} from "../Redux/parameter/parameterType";
import dummy_payload from "../static/dummyPayload";
import arrangeJsonBody from "../static/arrangeJsonBody";

const MainPage = (props) => {
  const stateData = useSelector((state) => state);
  // Initializing Variables (static value)
  const [result, setResult] = useState("");
  const sendRequest = () => {
    console.log(stateData,"Printing from fetch requests");
    arrangeJsonBody(stateData)

    fetch("http://127.0.0.1:5000/sql_construct", {
      method: "POST",
      body: JSON.stringify(arrangeJsonBody(stateData)),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResult(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const resetAll=()=>{
    setResult("")
    dispatch(resetAllData())
    dispatch(resetParamList([]))
  }

  const pageContent = useSelector(
    (state) => state.parameterReducer.toggleSection
  );
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const currentParam = useSelector(
    (state) => state.parameterReducer.currentParam
  );
  console.log(currentParam);
  // console.log(currentParam,currentParam.parameter_type.type,currentParam.parameter_value.type)
  const parameterList = useSelector(
    (state) => state.parameterReducer.parameterList
  );
  const selectedParam = useSelector(
    (state) => state.parameterReducer.selectedParam
  );

  const paramdata = useSelector((state) => state.parameterReducer.data);
  console.log(state);
  const selectSection = (e, section) => {
    dispatch(toggleSection(""));
    dispatch(resetCurrentParameter(section));
    dispatch(toggleSection(section));
  };
  useEffect(() => {
    console.log(currentParam, pageContent, "prionfas");
  }, [currentParam]);

  return (
    <>
      <div className="main-page">{props.heading}</div>

      {/* <div>Selected Param {selectedParam}</div> */}
      {/* <div>Selected section {pageContent}</div> */}
      {true && (
        <div className="toggle-main-section">
          <div
            className={
              pageContent === "Function Details" ? "main-section-toggle" : ""
            }
          >
            <Tab
              sx={{ textTransform: "None" }}
              onClick={(e) => selectSection(e, "Function Details")}
              label="Function Details"
            />
          </div>
          <div
            className={
              pageContent === "Parameter Details" ? "main-section-toggle" : ""
            }
          >
            {" "}
            <Tab
              sx={{ textTransform: "None" }}
              onClick={(e) => selectSection(e, "Parameter Details")}
              label="Parameter Details"
            />
          </div>
          <div
            className={
              pageContent === "Option Details" ? "main-section-toggle" : ""
            }
          >
            <Tab
              sx={{ textTransform: "None" }}
              onClick={(e) => selectSection(e, "Option Details")}
              label="Option Details"
            />
          </div>
          {/* <div onClick={(e)=>{console.log(e.target.innerText);setPageContent(e.target.innerText) }}  className="toggle-main-section-1">Parameter Details</div> */}
          {/* <div onClick={(e)=>{console.log(e.target.innerText);setPageContent(e.target.innerText) }}  className="toggle-main-section-1">Option Details</div> */}
        </div>
      )}
      <div className="param-section">
        <div className="param-scrollable-section">
          <ParamScrollableSection
          // parameterList={parameterList}
          // setSelectedParam={setSelectedParam}
          // selectedParam={selectedParam}
          // paramList={parameterValue}
          // setParamList={updateParamaterList}
          />
        </div>
        <div className="editable-section">
          { pageContent === "Function Details" && (
            <>
              <div className="parameter-type">
                <ParameterType
                  // paramList={paramList.data[selectedParam].default}
                  // function_name={selectedParam}
                  // data={data}
                  // setData={setData}
                  heading_name={"Function Details"}
                  paramJsonTree={"default"}
                  // selectedParam={selectedParam}
                  parameter={function_details.default}
                />{" "}
              </div>
              <div className="parameter-type">
                <ParameterType
                  // paramList={paramList.data[selectedParam].default}
                  // function_name={selectedParam}
                  // data={data}
                  // setData={setData}
                  heading_name={"function_meta_data"}
                  paramJsonTree={"function_meta_data"}
                  // selectedParam={selectedParam}
                  parameter={function_details.function_meta_data}
                />
              </div>
            </>
          )}
          { selectedParam !== "" &&  pageContent === "Option Details" &&
          (["SINGLE_SELECT", "MULTI_SELECT"].indexOf(
            paramdata[selectedParam].parameter_type.type
          ) !==
            -1) &
            (paramdata[selectedParam].parameter_value.type === "STATIC") ? (
            <div>
              <Options />{" "}
              <div>
                <OptionsDisplay />
              </div>{" "}
            </div>
          ) : (
            <></>
          )}
          {selectedParam !== "" && pageContent === "Parameter Details" &&
            parameterList.indexOf(selectedParam) !== -1 && (
              <div className="parameter-section">
                <div className="parameter-type">
                  {" "}
                  <ParameterType
                    // paramList={paramList.data[selectedParam].default}
                    // function_name={selectedParam}
                    // data={data}
                    // setData={setData}
                    heading_name={"Parameter Type"}
                    paramJsonTree={"parameter_type"}
                    // selectedParam={selectedParam}
                    parameter={param_details.parameter_type}
                  />
                </div>
                <div className="parameter-type">
                  {" "}
                  <ParameterType
                    // paramList={paramList.data[selectedParam].parameter_header}
                    // function_name={selectedParam}
                    // data={data}
                    // setData={setData}
                    paramJsonTree={"parameter_header"}
                    heading_name={"Parameter Header"}
                    // selectedParam={selectedParam}
                    parameter={param_details.parameter_header}
                  />
                </div>
                <div className="parameter-type">
                  {" "}
                  <ParameterType
                    // paramList={paramList}
                    // data={data}
                    // setData={setData}
                    // function_name={selectedParam}
                    paramJsonTree={"parameter_value"}
                    heading_name={"Parameter Value"}
                    // selectedParam={selectedParam}
                    parameter={param_details.parameter_value}
                  />
                </div>
              </div>
            )}
        </div>
      </div>
      {/* {currentParam &&
          currentParam.parameter_type &&
          (["SINGLE_SELECT", "MULTI_SELECT"].indexOf(
            currentParam.parameter_type.type
          ) !==
            -1) &
            (currentParam.parameter_value.type === "STATIC") && <Options />} */}
      <div className="submit-section">
        <Button variant="contained" onClick={sendRequest}>
          SUBMIT
        </Button>

        {result !== "" && (
          <>
            {" "}
            <Button variant="outlined" color="error" onClick={resetAll}>
              Reset
            </Button>{" "}
            <TextField
              id="filled-multiline-flexible"
              label="SQL QUERY"
              multiline
              maxRows={10}
              variant="filled"
              value={result}
            />
          </>
        )}
      </div>
    </>
  );
};
export default MainPage;
