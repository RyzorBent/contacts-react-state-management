import React from 'react';

const Contact = ({ name, number, id, onDelete, onEdit }) => {
  return (
    <li className='contact'>
      <div className='contact-body'>
        <h3 className='contact-name'>{name}</h3>
        <p className='contact-number'>{number}</p>
      </div>
      <div className='button-group'>
        <button className='btn-edit' onClick={() => onEdit(id)}>
          Edit
        </button>
        <button className='btn-delete' onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
