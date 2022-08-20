import React, { Component } from "react";
import styles from "./App.module.css";
import InputForm from "./components/form/InputForm";
import Header from "./components/header/Header";
import Questionnaire from "./components/questionnaire/Questionnaire";
import Card from "./components/wrapper/Card";

class App extends Component {
  state = {
    questionnaire: [],
    isToggled: false,
  };
  onFormSubmit = (data) => {
    // console.log("App.component", data);
    // this.setState();
    data.id = new Date();
    let questionnaire = [...this.state.questionnaire, data];
    this.setState({
      questionnaire,
      isToggled: true,
    });
  };
  render() {
    return (
      <div className={styles.App}>
        {!this.state.isToggled && (
          <Card>
            <Header title="Создание анкеты" />
            <InputForm onFormSubmit={this.onFormSubmit} />
          </Card>
        )}

        <Questionnaire questionnaire={this.state.questionnaire} />
      </div>
    );
  }
}

export default App;
