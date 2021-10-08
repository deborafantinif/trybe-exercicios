import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tech: "",
      career: "",
      study: "",
      goals: "",
      book: "false",
    };
  }

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
          <fieldset>
            <legend>Escolha uma tecnologia</legend>
            <select
              name="tech"
              value={this.state.tech}
              onChange={this.handleChange}
            >
              <option value="react">React</option>
              <option value="next">Next</option>
              <option value="ts">TS</option>
              <option value="angular">Angular</option>
            </select>
          </fieldset>

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

          <fieldset>
            <legend>
              Escreva quais são os suas metas para cumprir até o final do ano:
            </legend>
            <textarea
              name="goals"
              value={this.state.goals}
              onChange={this.handleChange}
            />
          </fieldset>

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
