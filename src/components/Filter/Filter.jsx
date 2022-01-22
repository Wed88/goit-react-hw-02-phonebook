import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ id, value, changeFilter }) => (
  <>
    <label htmlFor={id}>Find contacts by name</label>
    <input type="text" value={value} id={id} onChange={changeFilter} />
  </>
);

Filter.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Filter;
