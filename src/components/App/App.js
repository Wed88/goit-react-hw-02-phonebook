import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterImputId = shortid.generate();

  formOnSubmitContact = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const contacts = this.state.contacts;
    const visibledContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitContact={this.formOnSubmitContact} />
        <h2>Contacts</h2>
        <Filter
          id={this.filterImputId}
          value={this.state.filter}
          changeFilter={this.changeFilter}
        />
        <ContactList contacts={contacts} visibledContacts={visibledContacts} />
      </div>
    );
  }
}

export default App;
