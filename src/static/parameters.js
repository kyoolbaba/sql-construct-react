export const function_details = {
  default: {
    function_id: { type: "TEXT", display: true  },
    r_function_name: { type: "TEXT" ,display: true },
    function_name: { type: "TEXT" ,display: true },
    function_language: { type: "Options", options: ["PYTHON","R"] ,display: true },
    r_is_chain_function: { type: "Options", options: [false,true] ,display: true },
    function_label: { type: "TEXT" ,display: true },
    category_id: { type: "INT" ,display: true },
  },
  function_meta_data: {
    is_active: { type: "Options", options: [true, false] ,display: true},
    is_executable: { type: "Options", options: [true, false] ,display: true},
    input_multitable_indicator: { type: "Options", options: [false, true],display: true },
    all_data_identifier: { type: "Options", options: [false, true] ,display: true},
    data_modify_indicator: { type: "Options", options: [false, true] ,display: true},
    new_column_indicator: { type: "Options", options: [false, true] ,display: true},
    new_datatable_indicator: { type: "Options", options: [false, true] ,display: true},
    output_type: { type: "Options", options: ["CSV", "MIXED_OUTPUT", "TEXT"] ,display: true},
    create_data_object: { type: "Options", options: [false, true] ,display: true},
    use_data_object: { type: "Options", options: [false, true] ,display: true},
    function_desc: { type: "TEXT" ,display: true },
    function_popup_title: { type: "TEXT" ,display: true},
    function_popup_description: { type: "TEXT" ,display: true},
    function_search_tags: { type: "TEXT" ,display: true},
    category_id: { type: "INT",display: true },
  },
};

export const param_details = {
  parameter_type: {
    option_order: { type: "INT", display: false },
    required: { type: "Options", options: [false, true], display: true },
    type: {
      type: "Options",
      options: ["TEXT", "INT", "FLOAT", "MULTI_SELECT", "SINGLE_SELECT"],
      display: true,
    },
    note: { type: "TEXT", display: true },
    header: { type: "INT", display: true },
    value: { type: "TEXT", display: true },
  },
  parameter_header: {
    name: { type: "TEXT", display: true },
    label: { type: "TEXT", display: true },
    type: {
      type: "Options",
      options: [
        "DATA_HEADER",
        "DATA_BODY",
        "STATIC",
        "DATA_FILE",
        "DATA_TABLE",
      ],
      display: true,
    },
    description: { type: "TEXT", display: true },
  },
  parameter_value: {
    name: { type: "TEXT", display: true },
    label: { type: "TEXT", display: true },
    description: { type: "TEXT", display: true },
    type: {
      type: "Options",
      options: [
        "DATA_HEADER",
        "DATA_BODY",
        "STATIC",
        "DATA_FILE",
        "DATA_TABLE",
      ],
      display: true,
    },
  },
};

export const params_list = [];
