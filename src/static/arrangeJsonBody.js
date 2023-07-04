const arrangeJsonBody=(data)=>{
console.log(data, "from arrange JSON BODY")

let json_data={}
json_data['default']=data.parameterReducer.functionDetails.default
json_data['function_meta_data']=data.parameterReducer.functionDetails.function_meta_data
let params=[]
for (let key in data.parameterReducer.data){
    let param_details={name:key}
    console.log(key)
    console.log(data)
    
    param_details['parameter_type']=data.parameterReducer.data[key].parameter_type
    param_details['parameter_value']=data.parameterReducer.data[key].parameter_value
    param_details['parameter_header']=data.parameterReducer.data[key].parameter_header
    // console.log(data.parameterReducer.data[key].parameter_type.required,"Printing optionOrder")
    // console.log(data.parameterReducer.parameterList.indexOf(key),"Printing daata")
    // param_details["parameter_type"]["default"].required=data.parameterReducer.data[key].parameter_type.required
    // param_details["parameter_type"]["option_order"].option_order=data.parameterList.indexOf(key)+1
    // console.log(data.parameterReducer.data[key].parameter_type.required,"printing required")
    try{
    param_details.default={
        required:data.parameterReducer.data[key].parameter_type.required,
        option_order:data.parameterReducer.parameterList.indexOf(key)+1
    }
    param_details.options=data.parameterReducer.data[key].options

}
    catch(err){
        console.log(err)
        param_details.default={}
        param_details.options={}
    }
    // console.log(param_details['parameter_type'],"printing type param")
    params.push(param_details)
}

json_data["params"]=params

console.log(json_data,"printing arrange JSON BODY")


return json_data

}

export default arrangeJsonBody