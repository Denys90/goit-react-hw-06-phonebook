import React from 'react';
import List from '../Styled/List.srtled';
import { MdDeleteForever } from 'react-icons/md';

function ContactList({ contact, removeContact }) {
  return (
    <List>
      {contact.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => removeContact(id)}>
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </List>
  );
}

export default ContactList;
