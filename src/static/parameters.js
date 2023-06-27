
export const function_details={
    function_id:{ type: "TEXT"},
    r_function_name:{ type: "TEXT"},
    function_name:{ type: "TEXT"},
    function_language:{ type: "Options",options:["PYTHON"]},
    function_label:{ type: "TEXT"},
    is_active:{ type: "Options", options:[ true, false ]},
    is_executable: { type: "Options", options:[ true, false ]},
    input_multitable_indicator: { type: "Options", options:[ false,true ]},
    all_data_identifier: { type: "Options", options:[  false ,true]},
    data_modify_indicator: { type: "Options", options:[ false ,true]},
    new_column_indicator: { type: "Options", options:[  false,true ]},
    new_datatable_indicator: { type: "Options", options:[ false,true ]},
    output_type: { type: "Options", options:[ "CSV","MIXED_OUTPUT","TEXT"]},
    create_data_object: { type: "Options", options:[ false,true ]},
    use_data_object: { type: "Options", options:[  false,true ]},
    function_desc: { type: "TEXT"},
    function_popup_title: { type: "TEXT"},
    function_popup_description:{ type: "TEXT"},
    function_search_tags: { type: "TEXT"},
    category_id: { type: "INT"},


}

export const param_details={
    parameter_type:{
        option_order:{ type: "INT" , display:false},
        required: { type: "Options", options:[ false ,true], display:true},
        type:{type:"Options", options:["TEXT","INT","FLOAT","MULTI_SELECT","SINGLE_SELECT"],display:true}

    },
    parameter_header:{
        name:{type:"TEXT",display:true},
        label:{type:"TEXT",display:true},
        type:{type: "Options",options:["DATA_HEADER","DATA_BODY","STATIC","DATA_FILE","DATA_TABLE"],display:true},
        description:{ type: "TEXT",display:true},
        note:{ type: "TEXT",display:true},
        header:{ type: "INT",display:true},
        value:{ type: "TEXT",display:true},
    },
    parameter_value:{
        name:{ type: "TEXT",display:true},  
        label:{ type: "TEXT",display:true},  
        description:{ type: "TEXT",display:true},  
        type:{type: "Options",options:["DATA_HEADER","DATA_BODY","STATIC","DATA_FILE","DATA_TABLE"],display:true},
    }

}

export const params_list=[]

