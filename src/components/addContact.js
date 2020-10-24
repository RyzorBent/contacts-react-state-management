import React from 'react';
import { Consumer } from '../context';

const AddContact = ({ name, number, update }) => {
  const inputChange = (e, dispatch) => {
    dispatch({ type: 'INPUT_CHANGE', payload: e.target });
  };
  const onSubmit = (e, dispatch) => {
    e.preventDefault();
    if (!name || !number) return;

    dispatch({ type: 'ADD_UPDATE_CONTACT' });
    onReset(e, dispatch);
  };

  const onReset = (e, dispatch) => {
    dispatch({ type: 'RESET_FORM' });
    e.target['name'].focus();
  };

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <form
            className='add-contact'
            onSubmit={e => onSubmit(e, dispatch)}
            onReset={e => onReset(e, dispatch)}
          >
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              value={name}
              onChange={e => inputChange(e, dispatch)}
            />
            <input
              type='text'
              name='number'
              id='number'
              placeholder='Phone Number'
              value={number}
              onChange={e => inputChange(e, dispatch)}
            />
            <button className='btn-submit' type='submit'>
              {update ? 'Update' : 'Add'}
            </button>
            <button className='btn-reset' type='reset'>
              {update ? 'Cancel' : 'Clear'}
            </button>
          </form>
        );
      }}
    </Consumer>
  );
};

export default AddContact;
