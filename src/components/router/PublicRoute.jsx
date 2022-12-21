import {Navigate, Outlet} from 'react-router-dom';
import {DASHBOARD} from '../../config/router/paths.js';
import {useAuthContext} from '../../contexts/authContext';

export default function PublicRoute() {
  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={DASHBOARD} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}