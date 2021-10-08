import React from "react";
import TechForm from "./TechForm";
import GoalsForm from "./GoalsForm";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tech: "",
      career: "",
      study: "",
      goals: "",
      book: "false",
      formularioComErros: "true",
    };
  }

  handleErrors = ({ target }) => {
    this.setState(
      target.id
        ? { formularioComErros: "true" }
        : { formularioComErros: "false" }
    );
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Estudante</h1>

        <form className="formStudent">
          <TechForm
            value={this.state.tech}
            handleChange={this.handleChange}
            handleErrors={this.handleErrors}
          />

          <fieldset>
            <legend>Digite qual carreira quer seguir</legend>
            <input
              name="career"
              type="text"
              value={this.state.career}
              onChange={this.handleChange}
            />
          </fieldset>

          <fieldset>
            <legend>Digite o que está estudando atualmente</legend>
            <input
              name="study"
              type="text"
              value={this.state.study}
              onChange={this.handleChange}
            />
          </fieldset>

          <GoalsForm
            value={this.state.goals}
            handleChange={this.handleChange}
          />

          <fieldset>
            <input
              type="checkbox"
              name="book"
              value={this.state.book}
              onChange={this.handleChange}
              className="test"
            />
            Já terminei de ler Código Limpo
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
