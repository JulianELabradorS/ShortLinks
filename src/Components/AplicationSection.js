import React from 'react';
//Estilos
import './Styles/AplicationSection.css';
//Componentes
import LinkFormContainer from './LinkFormContainer';
import LinkSectionContainer from './LinkSectionContainer';
//Imagenes
import DetailedRecors from '../images/icon-detailed-records.svg';
import BrandRecognition from '../images/icon-brand-recognition.svg';
import Customizable from '../images/icon-fully-customizable.svg';

const ApiSection = () => {
  return (
    <section className="ApiSection">
      <div className="container-md">
        <LinkFormContainer />
        <LinkSectionContainer />
        <article className="ApiSection__Info">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced statistics
            dashboard
          </p>
        </article>
        <div className="ApiSection__Detailed">
          <div className="ApiSection__Detailed__Line"> </div>
          <div className="ApiSection__Detailed__Item">
            <div className="ApiSection__Detailed__Item__Img">
              <img src={BrandRecognition} alt="imagen" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don´t mean a thing.
              Branded links help instil confidence in you content.{' '}
            </p>
          </div>
          <div className="ApiSection__Detailed__Item">
            <div className="ApiSection__Detailed__Item__Img">
              <img src={DetailedRecors} alt="imagen" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and where people engage
              with you content helps inform better decisions.{' '}
            </p>
          </div>
          <div className="ApiSection__Detailed__Item">
            <div className="ApiSection__Detailed__Item__Img">
              <img src={Customizable} alt="imagen" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through customizable links.
              supercharging audience engagemnt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
