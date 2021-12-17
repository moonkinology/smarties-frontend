import React from "react";

function FormInput({
  changeCallBack,
  inputType,
  defValue,
  colMdSize,
  label,
  obj,
}) {
  return (
    <div className={colMdSize}>
      <label htmlFor="customInput" className="form-label">
        {label}
      </label>
      <input
        required
        type={inputType}
        className="form-control"
        id="customInput"
        defaultValue={defValue}
        onChange={(e) => changeCallBack(e.target.value, obj)}
      />
    </div>
  );
}

export default FormInput;
