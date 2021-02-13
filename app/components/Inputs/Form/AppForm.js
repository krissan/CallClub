import React from "react";
import { Formik } from "formik";

//Form Wrapper
function AppForm({ initialValues, onSubmit, validationSchema, children, ...otherProps }) {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...otherProps}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
