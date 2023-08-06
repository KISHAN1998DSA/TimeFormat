import React from "react";

const Dropdown = ({ setValue }) => {
  const handleChange = (event) => {
    console.log("handleChange", event.target.value);
    setValue(event.target.value);
  };
  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select</option>
        <option value="auto">Auto</option>
        <option value="disable">Disable</option>
        <option value="blur">Blure</option>
      </select>
    </div>
  );
};

export default Dropdown;
