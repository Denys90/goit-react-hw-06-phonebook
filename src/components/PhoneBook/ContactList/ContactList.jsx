import React from 'react';
import List from '../Styled/List.srtled';
import { MdDeleteForever } from 'react-icons/md';

function ContactList({ findContact, removeContact }) {
  return (
    <List>
      {findContact.map(({ id, name, number }) => (
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
