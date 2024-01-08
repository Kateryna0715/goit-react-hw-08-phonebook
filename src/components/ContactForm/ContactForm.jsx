import CSS from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { Notify } from 'notiflix';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      Notify.failure(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={CSS.formContainer}>
        <label htmlFor="inputName" className={CSS.formLabel}>
          Name
        </label>
        <input
          name="name"
          type="text"
          className={CSS.input}
          id="inputName"
          title="Please enter a valid name"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <label htmlFor="inputNumber" className={CSS.formLabel}>
          Number
        </label>
        <input
          name="number"
          type="tel"
          className={CSS.input}
          id="inputNumber"
          title="Please enter a valid number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
        <button type="submit" className={CSS.btn}>
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
