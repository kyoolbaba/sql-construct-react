import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/main_page";
import { useEffect, useState } from "react";
import { MyContext } from "./context/Mycontext";
import { useSelector,connect, useDispatch } from "react-redux";
import { addParameter, delParameter } from "./Redux/parameter/parameterType";


function App() {
  const [parameterValue, setParameterValue] = useState({data:{}});
  const dispatch=useDispatch()
  const [parameterList, setParameterList] = useState([]);
  const [currentParam, setCurrentParam] = useState({});
const counter= useSelector(state=>state)
console.log(counter,"Printing from redux")
const updateParameterList=(list_)=>{
  setParameterList(list_)
}

// useEffect(()=>{
//   let param_value=parameterValue
//   console.log("parameterList is changed ")
//   parameterList.forEach((val,idx)=>{
//     // console.log(param_value.data[val].default.option_order,idx,"before",val)
//     param_value.data[val].default.option_order=idx+1

//     // console.log(param_value.data[val].default.option_order,idx,"after",val)
//   })
//   setParameterValue(param_value)
//   console.log(parameterValue,"Printing from app.js")
// },[parameterList,currentParam])
const updateParameterParts=(paramSection,part,label,value)=>{
  const timeout=setTimeout(()=>{
    let param_value= parameterValue
    param_value.data[paramSection][part][label]=value
    setParameterValue(param_value)
    
  },0);
  return ()=>{
    clearTimeout(timeout);}
 


}


const updateCurrentParam=(data)=>{
  console.log("Updating current param")
  setCurrentParam(data)
}

  const updateParamaterList = (val) => {
    // console.log(parameterValue)
    // dispatch(addParameter(val))
    // console.log(counter)

    let paramList = parameterValue;
    val.default.option_order=parameterList.length+1
    paramList.data[val.name]=val
    setParameterValue(paramList);
    // console.log(parameterValue)
    if (parameterList.indexOf(val.name)===-1){
      let parameter_list=parameterList;
      
      parameter_list.push(val.name)
        setParameterList(parameter_list)
        // console.log(parameterList,parameterValue,"from")
    }


  };


    const deleteParamInList= (function_name) => {
      dispatch(delParameter(function_name))
      console.log(counter)
      let data=parameterValue.data
      // console.log(data)
      delete data[function_name]
      // console.log(data)
      let h= {...parameterValue,data}
      // console.log(h)
      setParameterValue(h)
      let parameter_list=parameterList;
      let index=parameter_list.indexOf(function_name);
      const x = parameter_list.splice(index, 1);
      setParameterList(parameter_list)
      // console.log(parameterList,parameterValue)

    }

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          paramList:parameterValue ,
          setParamList: updateParamaterList,
          deleteParamInList:deleteParamInList,
          parameterList:parameterList,
          setParameterList:setParameterList,
          updateParameterList:updateParameterList,
          updateParameterParts:updateParameterParts,
          currentParam:currentParam,
          setCurrentParam:updateCurrentParam
        }}
      >
        <MainPage heading="SQL Construct" />
        
      </MyContext.Provider>
    </div>
  );
}

export default App;
