import React, { useState } from 'react';
import './CheckBox.css';

const CheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        name={props.name}
        value={props.value}

      />
      <span className="checkmark"></span>
      Checkbox Label
    </label>
  );
};

export default CheckBox;