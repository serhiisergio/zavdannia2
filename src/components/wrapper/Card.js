import React, { Component } from "react";
import styles from "./Card.module.css";

class Card extends Component {
  render() {
    const { children } = this.props;
    return <div className={styles.card}>{children}</div>;
  }
}

export default Card;
