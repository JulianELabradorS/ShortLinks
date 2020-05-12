import React from 'react';

//Styles
import './Styles/LinkSection.css';
//Components

const LinkSection = (props) => {
  let arraydata = [];
  const { Data } = props;

  for (let key in Data) {
    let idButton = `${Data[key].hashid}button`;
    const link = `https://rel.ink/${Data[key].hashid}`;
    arraydata.push(
      <section className="container-lg Container" key={Data[key].hashid} id={Data[key].hashid}>
        <div className="Container__Link col-12 col-lg-6">
          <p>{Data[key].url}</p>
        </div>
        <hr className=" col-12 Container__Hr" />
        <div className="Container__ShortLinks col-12 col-lg-3">
          <textarea id={`${Data[key].hashid}copy`} readOnly="yes" value={link}></textarea>
        </div>
        <div className="Container__Button col-12 col-lg-3">
          <button
            onClick={() => props.handleCopy(Data[key].hashid)}
            className="button mb-2 mb-lg-0"
            id={idButton}
            type="button"
          >
            Copy
          </button>
          <button onClick={() => props.handleClick(key)} className="button-alert" type="button">
            Delete
          </button>
        </div>
      </section>
    );
  }

  return arraydata;
};

export default LinkSection;
