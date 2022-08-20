import React, { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
  render() {
    const { type, text } = this.props;
    return (
      <div className={styles.btn}>
        <button type={type} onClick={this.props.onClick}>
          {text}
        </button>
      </div>
    );
  }
}

export default Button;
