import PropTypes from 'prop-types';
const ParameterBody=(param_name)=>{

    return {
        name:param_name,
        default: {
            function_id: "",
            r_function_name: param_name,
            r_is_chain_function: false,
            function_name: "",
            function_language: "",
            function_label: ""
        },
        function_meta_data: {
            is_active: true,
            is_executable: true,
            input_multitable_indicator: false,
            all_data_identifier: false,
            data_modify_indicator: false,
            new_column_indicator: false,
            new_datatable_indicator: false,
            output_type: "CSV",
            create_data_object: false,
            use_data_object: false,
            function_desc: "",
            function_popup_title: "",
            function_popup_description: "",
            function_search_tags: ""
        },
        category_id: 0,
        params: [
                   ]
    }
    

}

export default  ParameterBody