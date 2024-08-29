import React from 'react';

function FormInput({ type, placeholder, required }) {
  return (
    <input type={type} placeholder={placeholder} required={required} />
  );
}

export default FormInput;
