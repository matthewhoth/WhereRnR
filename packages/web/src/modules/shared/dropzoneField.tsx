import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";

export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name },
  form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <Dropzone
      accept="image/jpeg, image/png"
      multiple={false}
      onDrop={([file]) => {
        setFieldValue(name, file);
      }}
      {...props}
    >
      <p>Drag and drop files here, or click the upload button!</p>
    </Dropzone>
  );
};
