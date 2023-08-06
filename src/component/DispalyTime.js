import React from "react";

const DispalyTime = ({ value }) => {
  const timeValue = new Date().toISOString();

  return (
    <div>
      {value === "" && <div> {timeValue}</div>}
      {value === "disable" && <div className=""> ----------- </div>}
      {value === "auto" && <div className=""> {timeValue} A </div>}

      {value === "blur" && (
        <div style={{ textShadow: " 0 0 8px #000", color: "transparent" }}>
          {timeValue}
        </div>
      )}
    </div>
  );
};

export default DispalyTime;
