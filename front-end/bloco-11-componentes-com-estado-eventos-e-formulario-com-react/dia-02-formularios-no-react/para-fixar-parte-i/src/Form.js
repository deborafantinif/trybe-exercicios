import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      career: "",
    };
  }

  saveInput = (event) => {
    this.setState({ career: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Estudante</h1>

        <form className="formStudent">
          <label>
            Escolha uma texnologia
            <select>
              <option value="react">React</option>
              <option value="next">Next</option>
              <option value="ts">TS</option>
              <option value="angular">Angular</option>
            </select>
          </label>

          <label>
            Digite qual carreira quer seguir:
            <input
              type="text"
              value={this.state.career}
              onChange={this.saveInput}
            />
          </label>

          <label>
            Digite o que está estudando atualmente:
            <input type="text" />
          </label>

          <label>
            Escreva quais são os suas metas para cumprir até i final do ano:
            <textarea name="goals" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
