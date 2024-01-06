import FormRegistration from 'components/FormRegistration/FormRegistration';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate]);

  return <FormRegistration />;
};

export default RegistrationPage;
