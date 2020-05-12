import React, { Fragment } from 'react';
//Componentes

import Hero from '../Components/Hero';
import Card from '../Components/Card';
import ApiSection from '../Components/AplicationSection';

const homePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <ApiSection />
      <Card />
    </Fragment>
  );
};
export default homePage;
