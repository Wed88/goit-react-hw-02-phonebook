import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, visibledContacts }) => (
  <>
    {contacts && (
      <ul>
        {visibledContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}:&nbsp; {number}
            </p>
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
};

export default ContactList;
