import React from 'react';
import Select from 'react-select';

const CovidForm = ({ countryList, onSelect }) => {
  return (
    <div className='input-group mt-3 w-50 mx-auto'>
      <Select onChange={onSelect} className='w-100' options={countryList} />
    </div>
  );
};

export default CovidForm;
