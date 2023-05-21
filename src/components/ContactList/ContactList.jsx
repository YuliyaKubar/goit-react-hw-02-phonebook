import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => onDeleteContact(id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
    })
  ),
};
