import ContactForm from '../../components/ContactForm/ContactForm';
import Section from '../../components/Section/Section';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Notification from '../../components/Notification/Notification';
import Loader from '../../components/Loader/Loader';
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
    <>
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

      <Section title="Phonebook">
        <ContactForm />
      </Section>

      {isLoading && <Loader />}

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="There is no added contacts" />
        )}
      </Section>
    </>
  );
};

export default ContactsPage;
