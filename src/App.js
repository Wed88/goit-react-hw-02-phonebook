import React, { Component } from 'react';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameImputId = shortid.generate();
  numberImputId = shortid.generate();
  filterImputId = shortid.generate();

  hendleImputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();

    this.addContact();

    this.reset();

    console.log(this.state);
  };

  addContact = () => {
    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    const contacts = this.state.contacts;
    const visibledContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.hendleSubmit}>
          <label htmlFor={this.nameImputId}>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hendleImputChange}
            id={this.nameImputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={this.numberImputId}>Number</label>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.hendleImputChange}
            id={this.numberImputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor={this.filterImputId}>Find contacts by name</label>
        <input
          type="text"
          value={this.state.filter}
          id={this.filterImputId}
          onChange={this.changeFilter}
        ></input>
        {this.state.contacts && (
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
      </div>
    );
  }
}

export default App;
