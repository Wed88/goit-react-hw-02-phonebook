import React from 'react';
import PropTypes from 'prop-types';
import { Item, Text, Button } from './ContactList.styled';

const ContactList = ({ contacts, visibledContacts, onDeleteContact }) => (
  <>
    {contacts && (
      <ul>
        {visibledContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>
              {name}:&nbsp; {number}
            </Text>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </ul>
    )}
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  visibledContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
