import React from 'react';
//Imagenes
import Logo from '../images/logo.svg';
import LogoFacebook from '../images/icon-facebook.svg';
import LogoInstagram from '../images/icon-instagram.svg';
import LogoPinterest from '../images/icon-pinterest.svg';
import LogoTwiter from '../images/icon-twitter.svg';
//Estilos
import './Styles/Footer.css';

const Footer = (props) => {
  return (
    <footer className="Footer py-5">
      <div className="container Footer__Menu">
        <div className="col-md-3 mb-md-0 mb-5 text-center text-md-left">
          <img src={Logo} alt="Logo de la pagina"></img>
        </div>
        <div className="Footer__Menu__Content col-6">
          <ul>
            <h3>Features</h3>
            <li>
              <a href="/">Link Shortening</a>
            </li>
            <li>
              <a href="/">Branded Links</a>
            </li>
            <li>
              <a href="/">Analitics</a>
            </li>
          </ul>
          <ul>
            <h3>Resources</h3>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Developers</a>
            </li>
            <li>
              <a href="/">Suport</a>
            </li>
          </ul>
          <ul>
            <h3>Company</h3>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Our Team</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="Footer__Menu__Social text-center col-4 col-md-3 my-3 my-md-0">
          <img className="ml-3" src={LogoFacebook} alt="Imagen de red social"></img>
          <img className="ml-3" src={LogoTwiter} alt="Imagen de red social"></img>
          <img className="ml-3" src={LogoPinterest} alt="Imagen de red social"></img>
          <img className="ml-3" src={LogoInstagram} alt="Imagen de red social"></img>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
