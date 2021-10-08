import React from "react";

class GoalsForm extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 80) error = "Texto muito grande";

    return (
      <fieldset>
        <legend>
          Escreva quais são os suas metas para cumprir até o final do ano:
        </legend>
        <textarea
          name="goals"
          value={value}
          onChange={handleChange}
        />

        <p className="error">{error ? error : ''}</p>

      </fieldset>
    );
  }
}

export default GoalsForm;
