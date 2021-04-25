import React from "react";
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";

export default function Checkbox(props) {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventParamenter = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            color="primary"
            name={name}
            onChange={(e) =>
              onChange(convertToDefaultEventParamenter(name, e.target.checked))
            }
            checked={value}
          />
        }
      ></FormControlLabel>
    </FormControl>
  );
}
