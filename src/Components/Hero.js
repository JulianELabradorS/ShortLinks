import React from 'react';
//Imagenes
import BackgroundImage from '../images/illustration-working.svg';
//Estilos
import './Styles/Hero.css';
//Componentes

const Hero = (props) => {
  return (
    <main className="Hero container-md">
      <article className="Hero__TextContainer col-12 col-md-7">
        <h1>
          More than just
          <br /> shorter links
        </h1>
        <p>
          Build you brand´s recognition and get detailed insights on how your links are performing
        </p>
        <button className="button" type="button">
          Get started
        </button>
      </article>
      <aside className="Hero__Img col-12 col-md-5">
        <img src={BackgroundImage} alt="Imagen de background"></img>
      </aside>
    </main>
  );
};
export default Hero;
