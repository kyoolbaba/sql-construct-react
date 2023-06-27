import * as actions from './parameterActions'
export const addParameter=(data)=>{
    return  {
        type:actions.ADDPARAMETER,
        payload:data
    }
}

export const delParameter=(data)=>{
    return  {
        type:actions.DELETEPARAMETER,
        payload:data
    }
}

export const alterParameter=(data)=>{
    console.log("reached alter method")
    return  {
        type:actions.ALTERPARAMETER,
        payload:data
    }
}

export const setCurrentParam=(data)=>{
    return  {
        type:actions.SETCURRENTPARAMETER,
        payload:data
    }
}

export const setSelectedParam=(data)=>{
    return  {
        type:actions.SETSELECTEDPARAMETER,
        payload:data
    }
}

export const resetParamList=(data)=>{
    return  {
        type:actions.RESETPARAMLIST,
        payload:data
    }
}

export const addToParameterList=(data)=>{
    return{
        type:actions.ADDTOPARAMETERLIST,
        payload:data
    }
}
export const deleteFromParameterList=(data)=>{
    return{
        type:actions.ADDTOPARAMETERLIST,
        payload:data
    }
}