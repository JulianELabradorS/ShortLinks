import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
//Imagenes
import Logo from '../images/logo.svg';
//Styles
import './Styles/Navbar.css';
//Components
import Modal from './loginModal';

const Topbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClick = () => setIsOpenModal(!isOpenModal);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="Navbar">
      <Navbar className="Navbar__Container container" light expand="md">
        <NavbarBrand href="/">
          <img src={Logo} alt="Logo de la pagina"></img>
        </NavbarBrand>
        <NavbarToggler className="Navbar__Toogler" onClick={toggle} />
        <Collapse className="Navbar__Menu text-center py-5 py-md-0" isOpen={isOpen} navbar>
          <ul className="flex-md-row flex-column ml-md-3">
            <li className="mr-md-3 mb-4 my-md-0">
              <a href="/">Features</a>
            </li>
            <li className="mr-md-3 mb-4 my-md-0">
              <a href="/">Pricing</a>
            </li>
            <li className="mr-md-3 mb-4 my-md-0">
              <a href="/">Resources</a>
            </li>
          </ul>
          <hr className="Navbar__Menu__Hr col-10 " />
          <div className="d-flex flex-column flex-md-row text-center Navbar__Menu__Access">
            <button className="mr-md-4 mt-4 mb-3 my-md-0 button--login" onClick={handleClick}>
              Login
            </button>
            <Link to="/sing-up" className="button">
              Sing up
            </Link>
          </div>
        </Collapse>
      </Navbar>
      <Modal isOpen={isOpenModal} onClose={handleClick} />
    </header>
  );
};

export default Topbar;
