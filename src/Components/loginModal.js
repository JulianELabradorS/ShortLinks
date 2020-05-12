import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Modal.css';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          x
        </button>
        <form>
          <label>Username or Email</label>
          <input type="text"></input>
          <label>Password</label>
          <input type="password"></input>
          <button className="button">Login</button>
        </form>
      </div>
    </div>,
    document.getElementById('modal')
  );
}
export default Modal;
