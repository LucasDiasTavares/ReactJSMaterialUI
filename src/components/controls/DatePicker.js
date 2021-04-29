import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ptBR } from "date-fns/locale";

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventParamenter = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="dd/mm/yyyy"
        name={name}
        value={value}
        invalidDateMessage="Date format invalid"
        onChange={(date) =>
          onChange(convertToDefaultEventParamenter(name, date))
        }
      />
    </MuiPickersUtilsProvider>
  );
}
