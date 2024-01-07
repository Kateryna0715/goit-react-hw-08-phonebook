import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import CSS from './index.module.css';
import Header from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className={CSS.header}>
        <Header />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};
