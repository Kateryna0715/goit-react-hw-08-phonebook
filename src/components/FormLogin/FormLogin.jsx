import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
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
} from '../FormRegistration/FormRegistration.styled';
import { useState } from 'react';

const FormLogin = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      logIn({
        email,
        password,
      })
    );

    form.reset();
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormTitle>Login</FormTitle>
        {/* <Link to="/">
          <ButtonLink type="button"> Go home </ButtonLink>
        </Link> */}

        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          type="email"
          id="email"
          placeholder="Enter your email address"
          pattern="^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
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
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            title="Password must contain at least eight or more characters (one number, one uppercase and lowercase letter)"
            autoComplete="off"
            required
          />
          <PasswordToggleIcon onClick={handleTogglePassword}>
            {showPassword ? '🙈' : '👁️'}
          </PasswordToggleIcon>
        </PasswordToggleContainer>

        <SubmitButton>Log In</SubmitButton>
        <Link to="/register">
          <ButtonLink>Don't have an account yet? Register</ButtonLink>
        </Link>
      </form>
    </FormContainer>
  );
};

export default FormLogin;
