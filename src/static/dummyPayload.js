const dummy_payload={
    "default": {
        "function_id": "FUNC0068",
        "r_function_name": "RollupUpdated",
        "r_is_chain_function": false,
        "function_name": "Function - Roll Up",
        "function_language": "PYTHON",
        "function_label": "Roll Up",
        "category_id": 404,
    },
    "function_meta_data": {
        "is_active": true,
        "is_executable": true,
        "input_multitable_indicator": false,
        "all_data_identifier": false,
        "data_modify_indicator": false,
        "new_column_indicator": false,
        "new_datatable_indicator": true,
        "output_type": "CSV",
        "create_data_object": false,
        "use_data_object": false,
        "function_desc": "",
        "function_popup_title": "",
        "function_popup_description": "",
        "function_search_tags": "50"
    },
    "params": [
        {
            "default": {
                "option_order": 2,
                "required": false
            },
            "parameter_type": {
                "type": "MULTI_SELECT",
                "description": "",
                "note": "Select this option only if all columns can be summarized using common set of summarization functions. Alternatively, select separate summarization functions below if they differ. Default option: \"Sum\"",
                "header": 9999,
                "value": "NULL"
            },
            "parameter_header": {
                "name": "rollUpFuncForAllColumns",
                "label": "Common summarization functions for selected colums'",
                "description": "",
                "type": "STATIC"
            },
            "parameter_value": {
                "name": "rollUpFuncForAllColumns",
                "label": "Common summarization functions for selected colums'",
                "description": "",
                "type": "STATIC"
            },
            "options": {
                "Count Distinct": "Count Distinct",
                "Min": "Minimum",
                "Max": "Maximum",
                "Mode": "Mode",
                "Median": "Median",
                "Avg": "Average",
                "Count": "Count",
                "Sum": "Sum",
                "variance": "Variance"
            }
        },
        {
            "default": {
                "option_order": 1,
                "required": true
            },
            "parameter_type": {
                "type": "MULTI_SELECT",
                "description": "",
                "note": "",
                "header": 9999,
                "value": "NULL"
            },
            "parameter_header": {
                "name": "Group_By",
                "label": "Group By",
                "description": "",
                "type": "STATIC"
            },
            "parameter_value": {
                "name": "ROLL UP VALUE",
                "label": "",
                "description": "",
                "type": "DATA_HEADER"
            }
        },
        {
            "default": {
                "option_order": 3,
                "required": false
            },
            "parameter_type": {
                "type": "MULTI_SELECT",
                "description": "",
                "note": "Select summarization functions for specified column. Deafault option: \"Sum\" ",
                "header": 9999,
                "value": "NULL"
            },
            "parameter_header": {
                "name": "ROLL UP",
                "label": "ROLL UP",
                "description": "",
                "type": "DATA_HEADER"
            },
            "parameter_value": {
                "name": "ROLL UP VALUE",
                "label": "",
                "description": "",
                "type": "STATIC"
            },
            "options": {
                "Count Distinct": "Count Distinct",
                "Min": "Minimum",
                "Max": "Maximum",
                "Mode": "Mode",
                "Median": "Median",
                "Avg": "Average",
                "Count": "Count",
                "Sum": "Sum",
                "variance": "Variance"
            }
        }
    ]
}

export default dummy_payload