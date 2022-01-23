import React from 'react';
import PropTypes from 'prop-types';
import { Item, Text, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <Item>
    <Text>
      {name}:&nbsp; {number}
    </Text>
    <Button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </Button>
  </Item>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
