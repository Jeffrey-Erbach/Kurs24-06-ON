import React from 'react';
import './CustomTextField.css'; 


function CustomTextField({ label, placeholder, value, onChange }) {
  return (
    <div className="custom-text-field"> {/* Klasse hinzugefügt */}
      <label>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomTextField;

