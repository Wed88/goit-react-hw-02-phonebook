import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, visibledContacts, onDeleteContact }) => (
  <>
    {contacts && (
      <ul>
        {visibledContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}:&nbsp; {number}
            </p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
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
