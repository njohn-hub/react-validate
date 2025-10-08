import React, { useState } from "react";
import "./formInputs.css";

const formInputs = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={()=> inputProps.name==="cpassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default formInputs;
