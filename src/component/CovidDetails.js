import React from 'react';

const CovidDetails = ({ country, confirmed, death }) => {
  return (
    <div className='mt-4'>
      <h4>The totoal Covid-19 cases for " {country} " is as follow :</h4>
      <div className='row mt-5'>
        <div className='col green'>
          <h1>Confirmed Count : </h1>
          <h1>{confirmed}</h1>
        </div>
        <div className='col red'>
          <h1>Death Count : </h1>
          <h1>{death}</h1>
        </div>
      </div>
    </div>
  );
};

export default CovidDetails;
