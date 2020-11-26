import React from "react";
import { useField } from "formik";

interface InputFieldProps {}

export const InputField: React.FC<InputFieldProps> = ({}) => {
  const [] = useField();
  return (
    <FormControl>
      <FormLabel htmlFor="username">Username</FormLabel>
      <Input
        value={values.username}
        onChange={handleChange}
        id="username"
        placeholder="username"
      />
      {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
    </FormControl>
  );
};
