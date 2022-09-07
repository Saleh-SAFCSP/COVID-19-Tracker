import React from 'react';

const Source = ({ source }) => {
  return (
    <div className='mt-5'>
      <a target='_blank' href={source} rel='noreferrer'>
        Click here for the Source
      </a>
    </div>
  );
};

export default Source;
