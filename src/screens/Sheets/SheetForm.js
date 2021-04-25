import { Grid } from "@material-ui/core";
import React from "react";
import SaveIcon from "@material-ui/icons/Save";
import UndoIcon from "@material-ui/icons/Undo";
import Controls from "../../components/controls/Controls";
import { Form, useForm } from "../../components/customHooks/useForm";
import * as sheetService from "../../services/sheetService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  city: "",
  phone: "",
  gender: "male",
  departmendId: "",
  releaseDate: new Date(),
  isObligatory: false,
};

export default function SheetForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("phone" in fieldValues)
      temp.phone =
        fieldValues.phone.length > 7 ? "" : "Minimum of 8 numbers required";
    if ("departmendId" in fieldValues)
      temp.departmendId =
        fieldValues.departmendId.length !== 0 ? "" : "This field is required";
    setErros({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErros, handleInputChange, resetForm } = useForm(
    initialFieldValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      sheetService.insertSheet(values);
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name *"
            value={values.fullName}
            name="fullName"
            error={errors.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Email"
            value={values.email}
            name="email"
            error={errors.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="City"
            value={values.city}
            name="city"
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Phone *"
            value={values.phone}
            name="phone"
            error={errors.phone}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            items={genderItems}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="departmendId"
            label="Department *"
            value={values.departmendId}
            error={errors.departmendId}
            onChange={handleInputChange}
            options={sheetService.getDepartmentCollection()}
          />
          <Controls.DatePicker
            name="releaseDate"
            label="New feature date"
            value={values.releaseDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isObligatory"
            label="Obligatory Form"
            value={values.isObligatory}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button
              size="large"
              text="Submit"
              type="submit"
              startIcon={<SaveIcon />}
            />
            <Controls.Button
              startIcon={<UndoIcon />}
              size="large"
              color="default"
              text="Reset"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
