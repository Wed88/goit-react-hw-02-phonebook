import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, Label, Input } from './Filter.styled';

const Filter = ({ id, value, changeFilter }) => (
  <FilterContainer>
    <Label htmlFor={id}>Find contacts by name</Label>
    <Input type="text" value={value} id={id} onChange={changeFilter} />
  </FilterContainer>
);

Filter.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Filter;
