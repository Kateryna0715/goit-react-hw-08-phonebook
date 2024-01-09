import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import {
  FormContainer,
  FormTitle,
  InputLabel,
  InputField,
  SubmitButton,
  ButtonLink,
  PasswordToggleContainer,
  PasswordInputField,
  PasswordToggleIcon,
} from './FormRegistration.styled';
import { useState } from 'react';

const FormRegistration = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormTitle>Register</FormTitle>
        {/* <Link to="/">
          <ButtonLink type="button"> Go home </ButtonLink>
        </Link> */}

        <InputLabel htmlFor="name">Name</InputLabel>
        <InputField
          type="text"
          id="name"
          placeholder="Enter your name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          autoComplete="off"
          required
        />

        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          type="email"
          id="email"
          placeholder="Enter your email address"
          pattern="^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          title="Please enter a valid email address"
          autoComplete="off"
          required
        />

        <InputLabel htmlFor="password">Password</InputLabel>
        <PasswordToggleContainer>
          <PasswordInputField
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$"
            title="Password must contain at least seven or more characters (one number, one uppercase and lowercase letter)"
            autoComplete="off"
            required
          />
          <PasswordToggleIcon onClick={handleTogglePassword}>
            {showPassword ? '🙈' : '👁️'}
          </PasswordToggleIcon>
        </PasswordToggleContainer>

        <SubmitButton>Register</SubmitButton>
        <Link to="/login">
          <ButtonLink>Already have an account? Login</ButtonLink>
        </Link>
      </form>
    </FormContainer>
  );
};

export default FormRegistration;
