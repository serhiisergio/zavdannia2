import React, { Component } from "react";
import styles from "./Questionnaire.module.css";

class Questionnaire extends Component {
  render() {
    const { questionnaire } = this.props;
    // console.log(questionnaire);
    const questionnaireList = questionnaire.map((field) => {
      return (
        <div className={styles.quest} key={field.id}>
          <div>
            <h2>
              {field.name} {field.lastName}
            </h2>
          </div>
          <div>
            <span className={styles.title}>Date of birth:</span>{" "}
            <span className="input">{field.date}</span>
          </div>
          <div>
            <span className={styles.title}>Phone:</span>{" "}
            <span className="input">{field.phone}</span>
          </div>
          <div>
            <span className={styles.title}>Website:</span>{" "}
            <span className="input">{field.site}</span>
          </div>
          <div>
            <span className={styles.title}>About:</span>{" "}
            <span className="input">{field.aboutMe}</span>
          </div>
          <div>
            <span className={styles.title}>Stack:</span>{" "}
            <span className="input">{field.stack}</span>
          </div>
          <div>
            <span className={styles.title}>Last project:</span>{" "}
            <span className="input">{field.project}</span>
          </div>
        </div>
      );
    });
    return <div className={styles.top}>{questionnaireList}</div>;
  }
}

export default Questionnaire;
