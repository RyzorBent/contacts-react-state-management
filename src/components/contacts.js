import React, { Component } from 'react';
import { Consumer } from '../context';

import Contact from './contact';
import AddContact from './addContact';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className='row'>
              <AddContact {...value} />
              <ul className='contacts'>
                {value.contacts
                  .sort((a, b) => {
                    if (a.name < b.name) return -1;
                    return 1;
                  })
                  .map(contact => (
                    <Contact {...contact} />
                  ))}
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
