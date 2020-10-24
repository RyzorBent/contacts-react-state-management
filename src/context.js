import React, { Component } from 'react';
import uid from 'uid';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'EDIT_CONTACT':
      const updateContact = state.contacts.find(
        contact => contact.id === action.payload
      );
      return {
        ...state,
        update: action.payload,
        name: updateContact.name,
        number: updateContact.number,
      };
    case 'INPUT_CHANGE':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'RESET_FORM':
      return {
        ...state,
        update: null,
        name: '',
        number: '',
      };
    case 'ADD_UPDATE_CONTACT':
      const { contacts, update, name, number } = state;
      const newContact = {
        id: update ? update : uid(),
        name: name,
        number: number,
      };
      const cloneContacts = contacts.filter(contact => contact.id !== update);
      return {
        ...state,
        contacts: [newContact, ...cloneContacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    dispatch: action => this.setState(state => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
