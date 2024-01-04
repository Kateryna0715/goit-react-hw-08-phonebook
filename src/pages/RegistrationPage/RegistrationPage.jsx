import FormRegistration from 'components/FormRegistration/FormRegistration';
import { useState } from 'react';
import { registration } from '../../redux/auth/operations';

const RegistrationPage = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  const register = async body => {
    try {
      const data = registration(body);
      setToken(data.token);
      setUser(data.user);
    } catch (error) {}
  };
  console.log('token', token);
  console.log('user', user);
  return <FormRegistration register={register} />;
};

export default RegistrationPage;
