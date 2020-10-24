import React from 'react';

const AddContact = ({
  onSubmit,
  onReset,
  inputChange,
  name,
  number,
  update,
}) => {
  return (
    <form className='add-contact' onSubmit={onSubmit} onReset={onReset}>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        value={name}
        onChange={inputChange}
      />
      <input
        type='text'
        name='number'
        id='number'
        placeholder='Phone Number'
        value={number}
        onChange={inputChange}
      />
      <button className='btn-submit' type='submit'>
        {update ? 'Update' : 'Add'}
      </button>
      <button className='btn-reset' type='reset'>
        {update ? 'Cancel' : 'Clear'}
      </button>
    </form>
  );
};

export default AddContact;
