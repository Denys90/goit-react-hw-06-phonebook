import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import Container from '../Styled/Container.styled';
import Title from '../Styled/Title.styled';
import MiniTitle from '../Styled/MiniTitle.styled';

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

    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );

    form.reset();
  };
  // ===========================================================>
  const removeContact = id => dispatch(deleteContact(id));
  // ===========================================================>
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit} />

      <MiniTitle>Contacts</MiniTitle>
      <Filter value={filter} />
      <ContactList contact={contact} removeContact={removeContact} />
    </Container>
  );
}
