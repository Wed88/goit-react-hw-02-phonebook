import React, { Component } from 'react';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameImputId = shortid.generate();
  // contactItemId = shortid.generate();

  hendleImputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: [value] });
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
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const contacts = this.state.contacts;

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

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        {this.state.contacts && (
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>
                <p>{contact.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
