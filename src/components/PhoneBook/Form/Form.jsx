import React from 'react';
import FormS from '../Styled/FormS.styled';
import { toast } from 'react-toastify';
import { addContact } from 'components/Redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

function Form() {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contact.contact);
  // ===========================================================>
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newContact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    const existingName = contact.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingName) {
      toast.error(`${newContact.name} is already in contacts!`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      toast.success('The contact is added to the phone book!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(addContact(newContact));
    }

    form.reset();
  };
  // ===========================================================>
  const { name, number } = useSelector(state => state.contact.contact);
  // ===========================================================>
  return (
    <FormS onSubmit={handleSubmit}>
      <label htmlFor="Name">
        Name
        <input type="text" name="name" id="Name" value={name} required />
      </label>
      <label>
        Number
        <input type="tel" name="number" value={number} required />
      </label>
      <button type="submit">Add Contact</button>
    </FormS>
  );
}

export default Form;
