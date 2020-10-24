import React from 'react';
import './App.css';
import { Provider } from './context';
import Contacts from './components/contacts';

function App() {
  return (
    <Provider>
      <div className='App'>
        <h1 className='title'>Contacts</h1>
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
