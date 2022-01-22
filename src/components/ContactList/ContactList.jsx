import React from 'react';

const ContactList = ({ contacts, visibledContacts }) => (
  <>
    {contacts && (
      <ul>
        {visibledContacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}:&nbsp; {contact.number}
            </p>
          </li>
        ))}
      </ul>
    )}
  </>
);

export default ContactList;
