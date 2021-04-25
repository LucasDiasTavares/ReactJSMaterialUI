import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(
  initialFieldValues,
  validateOnChange = false,
  validate
) {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErros] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    setErros({});
  };

  return {
    values,
    setValues,
    errors,
    setErros,
    handleInputChange,
    resetForm,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const { children, ...others } = props;
  const classes = useStyles();

  return (
    <form {...others} className={classes.root} autoComplete="off">
      {children}
    </form>
  );
}
