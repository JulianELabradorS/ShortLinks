import React from 'react';

//Estilos
import './Styles/LinkForm.css';

const LinkForm = (props) => {
  const { linkInput } = props.state;
  return (
    <div className="form__container">
      <form className="form" onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          type="text"
          name="LinkForm"
          id="form__input"
          placeholder="Shorten a link here"
          value={linkInput}
        ></input>
        <button className="button" type="submit">
          Shorten it!
        </button>
      </form>
      <label id="label__alert"></label>
    </div>
  );
};

export default LinkForm;
