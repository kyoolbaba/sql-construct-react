import { params_list } from "../../static/parameters";
import ParameterBody from "../../static/parameter_body";
import * as actions from "./parameterActions";
import { setCurrentParam } from "./parameterType";
const initialState = {
  functionDetails:ParameterBody(""),
  data: {},
  parameterList: [],
  selectedParam: "",
  currentParam: ParameterBody(""),
  parameterCurrentdefault:{},
  functionCurrentdefault:{},
  optionsDetailsCurrentDefault:{},
  toggleSection:"Parameter Details"
};

const actual_initialState = {
  functionDetails:ParameterBody(""),
  data: {},
  parameterList: [],
  selectedParam: "",
  currentParam: ParameterBody(""),
  parameterCurrentdefault:{},
  functionCurrentdefault:{},
  optionsDetailsCurrentDefault:{},
  toggleSection:"Parameter Details"
};

const parameterReducer = (state = initialState, action) => {
  if (action.type === actions.ADDPARAMETER) {

    let data = { ...state.data };
    let param_list=state.parameterList
    param_list.push(action.payload.name)

    data[action.payload.name] = action.payload;
    return {
      ...state,
      data: data,
      parameterList:param_list
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

    if(state.toggleSection==="Function Details"){
        currentParam=state.functionDetails
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
    let currentParam={}
    if(["Parameter Details","Options Details"].indexOf(state.toggleSection)===-1){
      currentParam=state.functionDetails
    }else{
    currentParam=state.data[action.payload]
  }
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
    // console.log("reached alter method into reducers")
    let data={...state.data}
    // console.log(data,action,"before")
    if (action.payload.name!==""){
      data[action.payload.name]=action.payload
      // console.log(data,"after")
    }

    return{
        ...state,data:data
    }

  }
  else if (action.type===actions.TOGGLESECTION){
    return {
      ...state,
      toggleSection:action.payload

    }
  }

  else if (action.type===actions.SETFUNCTIONDETAILS){
    return {
      ...state,
      functionDetails:action.payload

    }
  }

  else if (action.type===actions.ALTERFUNCTIONDETAILS){
    return {
      ...state,
      functionDetails:action.payload

    }
  }

  else if (action.type===actions.RESETCURRENTPARAMETER){
    let currentParam={}
    if(action.payload==="Function Details"){
        currentParam=state.functionDetails
    }
    else if (["Parameter Details","Option Details"].indexOf(action.payload)!==1){
      let selectedParam=state.selectedParam
      currentParam=state.data[selectedParam]
    }


    return {
      ...state,
      currentParam:currentParam
    }
  }
else if(action.type===actions.ADDTOOPTIONSLIST){
  console.log("CALLING Add Options list")
  let selectedParam=state.selectedParam
  let options=state.data[selectedParam].options
  options[action.payload[0]]=action.payload[1]
  let data=state.data
  data[selectedParam].options=options
  return{
    ...state,data:data
  }
}

else if (action.type===actions.ALTEROPTIONSLIST){
  let selectedParam=state.selectedParam
  let data=state.data
  data.options=action.payload
  return{
    ...state,data:data
  }


}

else if(action.type===actions.RESETALLDATA){
  return {...actual_initialState,functionDetails:ParameterBody("")}

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
