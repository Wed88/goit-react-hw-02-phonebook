import React, { Component } from 'react';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameImputId = shortid.generate();
  numberImputId = shortid.generate();

  hendleImputChange = event => {
    const { name, number, value } = event.currentTarget;

    this.setState({ [name]: [value] });
    this.setState({ [number]: [value] });
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

  reset = () => {
    this.setState({ name: '' });
    this.setState({ number: '' });
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
        {this.state.contacts && (
          <ul>
            {contacts.map(contact => (
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
