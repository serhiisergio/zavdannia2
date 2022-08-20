import React, { Component } from "react";

class InputField extends Component {
  render() {
    const {
      htmlFor,
      text,
      type,
      id,
      placeholder,
      required,
      value,
      handleInputChange,
    } = this.props;

    return (
      <div>
        <label htmlFor={htmlFor}>{text}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          defaultValue={value}
          onChange={handleInputChange}
        />
      </div>
    );
  }
}

export default InputField;
