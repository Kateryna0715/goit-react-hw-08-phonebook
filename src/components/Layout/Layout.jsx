import { AppBar } from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
    </div>
  );
};

export default Layout;
