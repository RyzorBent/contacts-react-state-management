import React, { Component } from 'react';
import uid from 'uid';
import Contact from './contact';
import AddContact from './addContact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Jerome Estiller',
        number: '0975676465465',
      },
      {
        id: 2,
        name: 'Mark Clif Turla',
        number: '09654675765866',
      },
      {
        id: 3,
        name: 'Jefte Corona',
        number: '09654675567565',
      },
    ],
    update: null,
    name: '',
    number: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEdit = e => {
    const { contacts } = this.state;
    const updateContact = contacts.find(contact => contact.id === e);
    this.setState({
      update: e,
      name: updateContact.name,
      number: updateContact.number,
    });
  };

  handleDelete = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  };

  handleReset = e => {
    this.setState({ update: null, name: '', number: '' }, () => {
      e.target['name'].focus();
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { contacts, update, name, number } = this.state;
    if (!name || !number) return;

    const newContact = {
      id: update ? update : uid(),
      name: name,
      number: number,
    };

    const cloneContacts = contacts.filter(contact => contact.id !== update);

    this.setState(
      {
        contacts: [newContact, ...cloneContacts],
      },
      this.handleReset(e)
    );
  };
  render() {
    return (
      <div className='row'>
        <AddContact
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
          inputChange={this.onChange}
          {...this.state}
        />
        <ul className='contacts'>
          {this.state.contacts
            .sort((a, b) => {
              if (a.name < b.name) return -1;
              return 1;
            })
            .map(contact => (
              <Contact
                {...contact}
                key={contact.id}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
