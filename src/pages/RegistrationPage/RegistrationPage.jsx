import FormRegistration from 'components/FormRegistration/FormRegistration';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RegistrationPage = () => {
  const isAuth = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  return <FormRegistration />;
};

export default RegistrationPage;
