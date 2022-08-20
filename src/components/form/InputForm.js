import React, { Component } from "react";
import Button from "../button/Button";
import InputField from "./InputField";
import TextArea from "./TextArea";
import styles from "./InputForm.module.css";

class InputForm extends Component {
  state = {
    name: "",
    lastName: "",
    date: "",
    phone: "",
    site: "",
    aboutMe: "",
    stack: "",
    project: "",
    errors: {},
    needChars: 600,
    charsCount: "",
    limChars: null,
    needStackChars: 600,
    charsStackCount: "",
    limCharsStack: null,
    needAboutMeChars: 600,
    charsAboutMeCount: "",
    limCharsAboutMe: null,
  };
  handleInputChange = (name, value) => {
    // console.log("before", JSON.parse(JSON.stringify(this.state)));

    this.setState({ ...this.state, [name]: value });

    //Validation of an aboutMe textarea
    if (name === "aboutMe") {
      const charsAboutMeCount = value === "" ? 0 : value.split(" ").length;
      this.setState({
        charsAboutMeCount: charsAboutMeCount,
        limCharsAboutMe:
          this.state.needAboutMeChars - charsAboutMeCount < 0
            ? this.state.aboutMe.length
            : null,
      });
    }

    //Validation of a stack textarea
    if (name === "stack") {
      const charsStackCount = value === "" ? 0 : value.split(" ").length;
      this.setState({
        charsStackCount: charsStackCount,
        limCharsStack:
          this.state.needStackChars - charsStackCount < 0
            ? this.state.stack.length
            : null,
      });
    }

    //Validation of a project textarea
    if (name === "project") {
      const charsCount = value === "" ? 0 : value.split(" ").length;
      this.setState({
        charsCount: charsCount,
        limChars:
          this.state.needChars - charsCount < 0
            ? this.state.project.length
            : null,
      });
    }

    // console.log("after", JSON.parse(JSON.stringify(this.state)));
  };

  formValidation = () => {
    const { name, lastName, date, phone, site, aboutMe, stack, project } =
      this.state;
    ///////////////////////////////////////////
    let isValid = true;
    const errors = {};
    const patterns = {
      firstName: /^[A-Z][a-z0-9_-]{1,19}$/,
      telephone: /^\d{9}/,
      website: /https:\/\//,
    };

    //FirstName and LastName upperCase Validation
    const validateNames = (field, regex) => {
      if (!regex.test(field)) {
        errors.upperCaseLetter = "Первая буква должна быть заглавной";
        isValid = false;
      }
    };

    validateNames(name, patterns["firstName"]);

    //Phone number validation

    const validatePhone = (field, regex) => {
      if (!regex.test(field)) {
        errors.phoneNumber = "Количество цифр должно быть 9";
        isValid = false;
      }
    };
    validatePhone(phone, patterns["telephone"]);

    //Website validation
    const validateSite = (field, regex) => {
      if (!regex.test(field)) {
        errors.website = "Название сайта должно начинаться с https://";
        isValid = false;
      }
    };

    validateSite(site, patterns["website"]);
    /////////////////////////////

    if (name.trim().length === 0) {
      errors.nameLength = "Поле пустое. Заполните пожалуйста";
      isValid = false;
    }

    if (lastName.trim().length === 0) {
      errors.lastNameLength = "Поле пустое. Заполните пожалуйста";
      isValid = false;
    }
    if (date.trim().length === 0) {
      errors.dateLength = "Поле пустое. Заполните пожалуйста";
      isValid = false;
    }
    if (phone.trim().length === 0) {
      errors.phoneLength = "Поле пустое. Заполните пожалуйста";
      isValid = false;
    }

    if (site.trim().length === 0) {
      errors.siteLength = "Поле пустое. Заполните пожалуйста";
      isValid = false;
    }
    if (aboutMe.trim().length === 0) {
      errors.aboutMeLength = "Поле пустое. Заполните пожалуйста";
      isValid = false;
    }
    if (stack.trim().length === 0) {
      errors.stackLength = "Поле пустое. Заполните пожалуйста";
      isValid = false;
    }
    if (project.trim().length === 0) {
      errors.projectLength = "Поле пустое. Заполните пожалуйста";
      isValid = false;
    }
    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const isValid = this.formValidation();
    if (isValid) {
      this.props.onFormSubmit(this.state);
    }
    this.setState({
      needChars: this.state.project,
      needStackChars: this.state.stack,
      needAboutMeChars: this.state.aboutMe,
    });
  };

  handleReset = () => {
    this.setState({
      name: "",
      lastName: "",
      date: "",
      phone: "",
      site: "",
      aboutMe: "",
      stack: "",
      project: "",
      errors: {},
      needChars: 600,
      charsCount: "",
      limChars: null,
      needStackChars: 600,
      charsStackCount: "",
      limCharsStack: null,
      needAboutMeChars: 600,
      charsAboutMeCount: "",
      limCharsAboutMe: null,
    });
  };
  render() {
    const { errors } = this.state;

    let resultAboutMe =
      this.state.needAboutMeChars - this.state.charsAboutMeCount;
    let tooManyCharsAboutMe;
    if (resultAboutMe < 0) {
      const tooManyCharStyle = {
        color: "red",
      };
      tooManyCharsAboutMe = (
        <p className={tooManyCharStyle}>Превышен лимит символов в поле</p>
      );
    }

    /////////////////
    let resultStack = this.state.needStackChars - this.state.charsStackCount;
    let tooManyCharsStack;
    if (resultStack < 0) {
      const tooManyCharStyle = {
        color: "red",
      };
      tooManyCharsStack = (
        <p className={tooManyCharStyle}>Превышен лимит символов в поле</p>
      );
    }

    /////////////////
    let result = this.state.needChars - this.state.charsCount;
    let tooManyChars;
    if (result < 0) {
      const tooManyCharStyle = {
        color: "red",
      };
      tooManyChars = (
        <p className={tooManyCharStyle}>Превышен лимит символов в поле</p>
      );
    }
    return (
      <div className={styles.fields}>
        <form onSubmit={this.handleSubmit}>
          <InputField
            htmlFor="name"
            text="Имя"
            type="text"
            id="name"
            placeholder="Сергій"
            value={this.state["name"]}
            handleInputChange={(e) =>
              this.handleInputChange("name", e.target.value)
            }
          />
          {<div style={{ color: "red" }}>{errors["nameLength"]}</div>}
          {<div style={{ color: "red" }}>{errors["upperCaseLetter"]}</div>}
          <InputField
            htmlFor="lastName"
            text="Фамилия"
            type="text"
            id="lastName"
            placeholder="Дмітрієв"
            value={this.state["lastName"]}
            handleInputChange={(e) =>
              this.handleInputChange("lastName", e.target.value)
            }
          />
          {<div style={{ color: "red" }}>{errors["lastNameLength"]}</div>}
          {<div style={{ color: "red" }}>{errors["upperCaseLetter"]}</div>}
          <InputField
            htmlFor="birthday"
            text="Дата рождения"
            type="date"
            id="birthday"
            placeholder="09.08.1900"
            value={this.state["date"]}
            handleInputChange={(e) =>
              this.handleInputChange("date", e.target.value)
            }
          />
          {<div style={{ color: "red" }}>{errors["dateLength"]}</div>}
          <InputField
            htmlFor="phone"
            text="Телефон"
            type="number"
            id="phone"
            placeholder="+99567536789"
            value={this.state["phone"]}
            handleInputChange={(e) =>
              this.handleInputChange("phone", e.target.value)
            }
          />
          {<div style={{ color: "red" }}>{errors["phoneLength"]}</div>}
          {<div style={{ color: "red" }}>{errors["phoneNumber"]}</div>}
          <InputField
            htmlFor="site"
            text="Сайт"
            type="text"
            id="site"
            placeholder="www.mysite.io"
            value={this.state["site"]}
            handleInputChange={(e) =>
              this.handleInputChange("site", e.target.value)
            }
          />
          {<div style={{ color: "red" }}>{errors["siteLength"]}</div>}
          {<div style={{ color: "red" }}>{errors["website"]}</div>}
          <TextArea
            htmlFor="aboutMe"
            text="О себе"
            id="aboutMe"
            name="aboutMe"
            cols="30"
            rows="7"
            placeholder="Напишите о ваших интересах"
            value={this.state["aboutMe"]}
            handleInputChange={(e) =>
              this.handleInputChange("aboutMe", e.target.value)
            }
          />
          {<p style={{ color: "white" }}>Осталось {resultAboutMe}/600 слов</p>}
          {tooManyCharsAboutMe}
          {<div style={{ color: "red" }}>{errors["aboutMeLength"]}</div>}
          <TextArea
            htmlFor="stack"
            text="Стек технологий"
            id="stack"
            name="stack"
            cols="30"
            rows="7"
            placeholder="Какие технологии вы использовали"
            value={this.state["stack"]}
            handleInputChange={(e) =>
              this.handleInputChange("stack", e.target.value)
            }
          />
          {<p style={{ color: "white" }}>Осталось {resultStack}/600 слов</p>}
          {tooManyCharsStack}
          {<div style={{ color: "red" }}>{errors["stackLength"]}</div>}
          <TextArea
            htmlFor="project"
            text="Описание последнего проекта"
            id="project"
            name="project"
            cols="30"
            rows="7"
            placeholder="Напишите о чем был ваш последний проект"
            value={this.state["project"]}
            maxLength={this.state.limChars}
            handleInputChange={(e) =>
              this.handleInputChange("project", e.target.value)
            }
          />
          {<p style={{ color: "white" }}>Осталось {result}/600 слов</p>}
          {tooManyChars}
          {<div style={{ color: "red" }}>{errors["projectLength"]}</div>}
          <Button type="reset" text="Отмена" onClick={this.handleReset} />
          <Button type="submit" text="Сохранить" />
        </form>
      </div>
    );
  }
}

export default InputForm;
