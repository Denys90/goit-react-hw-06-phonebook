import React from 'react';
import Input from '../Styled/Input.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'components/Redux/contactsSlice';

function Filter() {
  const filter = useSelector(state => state.contact.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <Input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleChangeFilter}
    />
  );
}

export default Filter;
