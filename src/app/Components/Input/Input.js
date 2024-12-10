import React from "react";

function Input({
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  labelText,
  fieldName,
  layout = "col",
  customClass = "",
}) {
  return (
    <div
      className={`flex ${layout === "row" ? "flex-row" : "flex-col"} gap-[5px] ${customClass}`}
    >
      {labelText && (
        <label htmlFor={name}>
          {labelText}
          <span className="text-red-500">*</span>
        </label>
      )}
      <input
        onChange={onChange}
        className="w-full h-[38px] border-[1px] border-[#2F2B3D40] rounded-[6px] !outline-none px-3"
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onBlur={onBlur}
      />
    </div>
  );
}

export default Input;




