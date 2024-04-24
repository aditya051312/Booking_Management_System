import React from 'react';
import { useField } from 'formik';

function FormInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default FormInput;