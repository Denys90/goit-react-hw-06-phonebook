import React from 'react';
import List from '../Styled/List.srtled';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/Redux/contactsSlice';

function ContactList() {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contact.contact);
  const filter = useSelector(state => state.contact.filter);
  // ===========================================================>
  const findContact = contact.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // ===========================================================>
  const removeContact = id => dispatch(deleteContact(id));
  // ===========================================================>
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
