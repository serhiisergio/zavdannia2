import React, { Component } from "react";

class TextArea extends Component {
  render() {
    const {
      htmlFor,
      text,
      id,
      name,
      cols,
      rows,
      placeholder,
      value,
      handleInputChange,
    } = this.props;
    return (
      <div>
        <label htmlFor={htmlFor}>{text}</label>
        <textarea
          id={id}
          name={name}
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    );
  }
}

export default TextArea;
