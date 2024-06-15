import ContactForm from '../../components/ContactForm/ContactForm';
import Title from '../../components/Title/Title';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Notification from '../../components/Notification/Notification';
import Loader from '../../components/Loader/Loader';
import Container from 'components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {error && (
        <h1
          style={{
            textAlign: 'center',
            marginTop: '20px',
            color: 'red',
            fontSize: '28px',
          }}
        >
          Oops! {error}. Please refresh the page and try again
        </h1>
      )}
      {isLoading && <Loader />}
      <Title title="Phonebook" />
      <ContactForm />

      <Title title="Contacts" />
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification message="There is no added contacts" />
      )}
    </Container>
  );
};

export default ContactsPage;
