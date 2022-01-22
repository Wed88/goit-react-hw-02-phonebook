import React from 'react';

const Filter = ({ id, value, changeFilter }) => (
  <>
    <label htmlFor={id}>Find contacts by name</label>
    <input type="text" value={value} id={id} onChange={changeFilter} />
  </>
);

export default Filter;
