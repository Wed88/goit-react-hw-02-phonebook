import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  hendleImputChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.hendleImputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="button">Add contact</button>
        </form>
      </div>
    );
  }
}

export default App;
