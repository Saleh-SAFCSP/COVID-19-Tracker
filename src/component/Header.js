import React from 'react';

const Header = ({ covidImg }) => {
  return (
    <>
      <h1>COVID-19 Tracker</h1>
      <img
        className='mt-4'
        width='50%'
        height='50%'
        src={covidImg}
        alt='covid-19 tracker'
      ></img>
    </>
  );
};

export default Header;
