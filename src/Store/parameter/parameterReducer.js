import { params_list } from "../../static/parameters";
import * as actions from "./parameterActions";
const initialState = {
  data: {},
  parameterList: [],
  selectedParam: "",
  currentParam: {},
};

const parameterReducer = (state = initialState, action) => {
  if (action.type === actions.ADDPARAMETER) {

    let data = { ...state.data };
    let param_list=state.parameterList
    params_list.push(action.payload.name)

    data[action.payload.name] = action.payload;
    return {
      ...state,
      data: data,
      parameterList:params_list
    };
  } else if (action.type === actions.DELETEPARAMETER) {
    console.log("From Delete Section")
    let data = { ...state.data };
    let parameter_list=state.parameterList;
      let index=parameter_list.indexOf(action.payload);
      parameter_list.splice(index, 1);
      console.log(parameter_list,"Printing From Selected")
      let selectedParam=state.selectedParam
      let currentParam={}
      if ((parameter_list.length > 0) & (parameter_list[index-1]!==undefined) ){
            selectedParam=parameter_list[index-1]
            currentParam=state.data[parameter_list[index-1]]
      }else if (parameter_list.length > 0){
        selectedParam=parameter_list[0]
        currentParam=state.data[parameter_list[0]]
      } else {
        selectedParam=""
      }
    delete data[action.payload];
    return {
      ...state,
      data: data,
      parameterList:parameter_list,
      selectedParam:selectedParam,
      currentParam:currentParam
    };
  } else if (action.type === actions.SETSELECTEDPARAMETER) {
    console.log("CHANING SELECTEDD")
    let currentParam=state.data[action.payload]
    return {
      ...state,
      selectedParam: action.payload,
      currentParam:currentParam
    };
  } else if (action.type === actions.SETCURRENTPARAMETER) {
    return {
      ...state,
      currentParam: action.payload,
    };
  } else if (action.type === actions.RESETPARAMLIST) {
    return {
      ...state,
      parameterList: action.payload,
    };
  } 

  else if(action.type === actions.ALTERPARAMETER){
    console.log("reached alter method into reducers")
    let data={...state.data}
    console.log(data,action,"before")
    data[action.payload.name]=action.payload
    console.log(data,"after")

    return{
        ...state,data:data
    }

  }
//   else if (action.type === actions.ADDTOPARAMETERLIST) {

//     if (action.payload !== undefined) {
//         let param_list = state.parameterList;
//         params_list.push(action.payload);
//         console.log(action.payload, "printing from payload");
//       return {
//         ...state,
//         parameterList: params_list,
//       };
//     } else {
//       return {
//         ...state,
//       };
//     }
//   } 
  
  
  else {
    return {
      ...state,
    };
  }
};

export default parameterReducer;
