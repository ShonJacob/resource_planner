import React from "react";
import "./SlidingButton.css";

const SlidingButton = () => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default SlidingButton;
