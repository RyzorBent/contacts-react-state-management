import React from 'react';
import { Consumer } from '../context';

const Contact = ({ name, number, id }) => {
  const handleDelete = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  const handleEdit = (id, dispatch) => {
    dispatch({ type: 'EDIT_CONTACT', payload: id });
  };
  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <li className='contact'>
            <div className='contact-body'>
              <h3 className='contact-name'>{name}</h3>
              <p className='contact-number'>{number}</p>
            </div>
            <div className='button-group'>
              <button
                className='btn-edit'
                onClick={() => handleEdit(id, dispatch)}
              >
                Edit
              </button>
              <button
                className='btn-delete'
                onClick={() => handleDelete(id, dispatch)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      }}
    </Consumer>
  );
};

export default Contact;
