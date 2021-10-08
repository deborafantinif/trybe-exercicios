import React from "react";

class TechForm extends React.Component {
  render() {
    const { value, handleChange, handleErrors } = this.props

    let error = !value.length ? "Obrigatório" : ''

    return (
      <fieldset>
        <legend>Escolha uma tecnologia</legend>
        <select
          name="tech"
          value={value}
          onChange={handleChange}
          onClick={handleErrors}
          id={error}
        >
          <option value="">Escolha</option>
          <option value="react">React</option>
          <option value="next">Next</option>
          <option value="ts">TS</option>
          <option value="angular">Angular</option>
        </select>

        <p className="error">{error}</p>
      </fieldset>
    );
  }
}

export default TechForm
