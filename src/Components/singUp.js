import React from 'react';
import './Styles/singUp.css';

const singUp = (props) => {
  return (
    <div className="container-fluid">
      <div className="form__container ">
        <form onSubmit={props.handleSubmit}>
          <p id="alert">red fields are required for user creation.</p>
          <label>First name</label>
          <input
            onChange={props.handleChange}
            type="text"
            name="firstname"
            id="formfirstname"
          ></input>
          <label>Last name</label>
          <input
            onChange={props.handleChange}
            type="text"
            name="lastname"
            id="formlastname"
          ></input>
          <label>Username</label>
          <input
            onChange={props.handleChange}
            type="text"
            name="username"
            id="formusername"
          ></input>
          <label>Password</label>
          <input
            onChange={props.handleChange}
            type="password"
            name="password"
            id="formpassword"
          ></input>
          <label>Email address</label>
          <input onChange={props.handleChange} type="email" name="email" id="formemail"></input>
          <label>Address</label>
          <input onChange={props.handleChange} type="text" name="address" id="formaddress"></input>
          <label>Cell Phone</label>
          <input
            onChange={props.handleChange}
            type="number"
            name="cellphone"
            id="formcellphone"
          ></input>
          <button type="submit" className="button">
            Submit
          </button>
        </form>

        <div className="text__container">
          <h2>Glad to see you</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet est sed turpis
            tincidunt gravida.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
export default singUp;
