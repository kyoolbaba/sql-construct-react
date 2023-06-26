const ParamListBody = (param_name) => {
  return {
    name:param_name,
    default: {
      option_order: 0,
      required: true,
    },

    parameter_type: {
      type: "",
      description: "",
      note: "",
      header: 9999,
      value: "",
    },
    parameter_header: {
      name: "",
      label: "",
      description: "",
      type: "",
    },
    parameter_value: {
      name: "",
      label: "",
      description: "",
      type: "",
    },
  };
};

export default ParamListBody;
