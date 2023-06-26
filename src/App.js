import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/main_page";
import { useEffect, useState } from "react";
import { MyContext } from "./Store/Mycontext";

function App() {
  const [parameterValue, setParameterValue] = useState({data:{}});
  const [parameterList, setParameterList] = useState([]);

const updateParameterList=(list_)=>{
  setParameterList(list_)
}

useEffect(()=>{
  let param_value=parameterValue
  console.log("parameterList is changed ")
  parameterList.forEach((val,idx)=>{
    // console.log(param_value.data[val].default.option_order,idx,"before",val)
    param_value.data[val].default.option_order=idx+1

    // console.log(param_value.data[val].default.option_order,idx,"after",val)
  })
  setParameterValue(param_value)
  console.log(parameterValue)
},[parameterList])
let k=10
const updateParameterParts=(paramSection,part,label,value)=>{
  const timeout=setTimeout(()=>{
    k+=1
    console.log(k)
    console.log("Checking for Validity")
    let param_value= parameterValue
    console.log(param_value)
    console.log(paramSection,part,label,value)
    param_value.data[paramSection][part][label]=value
    setParameterValue(param_value)
    console.log(param_value)
    
  },1000);
  return ()=>{
    clearTimeout(timeout);}
 


}

  const updateParamaterList = (val) => {
    // console.log(parameterValue)
    let paramList = parameterValue;
    val.default.option_order=parameterList.length+1
    paramList.data[val.name]=val
    setParameterValue(paramList);
    console.log(parameterValue)
    if (parameterList.indexOf(val.name)===-1){
      let parameter_list=parameterList;
      
      parameter_list.push(val.name)
        setParameterList(parameter_list)
        // console.log(parameterList,parameterValue,"from")
    }


  };


    const deleteParamInList= (function_name) => {
      let data=parameterValue.data
      console.log(data)
      delete data[function_name]
      console.log(data)
      let h= {...parameterValue,data}
      // console.log(h)
      setParameterValue(h)
      let parameter_list=parameterList;
      let index=parameter_list.indexOf(function_name);
      const x = parameter_list.splice(index, 1);
      setParameterList(parameter_list)
      console.log(parameterList,parameterValue)

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
          updateParameterParts:updateParameterParts
        }}
      >
        <MainPage heading="SQL Construct" />
      </MyContext.Provider>
    </div>
  );
}

export default App;
