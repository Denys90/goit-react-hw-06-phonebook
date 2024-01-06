import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import Container from '../Styled/Container.styled';
import Title from '../Styled/Title.styled';
import MiniTitle from '../Styled/MiniTitle.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'components/Redux/contactsSlice';

export function PhoneBook() {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contact.contact);
  const filter = useSelector(state => state.contact.filter);

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
  const removeContact = id => dispatch(deleteContact(id));
  // ===========================================================>
  const findContact = contact.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // ===========================================================>
  return (
    <>
      <Container>
        <ToastContainer />

        <Title>Phonebook</Title>
        <Form onSubmit={handleSubmit} />

        <MiniTitle>Contacts</MiniTitle>
        <Filter />
        <ContactList findContact={findContact} removeContact={removeContact} />
      </Container>
    </>
  );
}
