import { Navigate, Outlet, useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectAuthToken } from 'src/features/auth/authSlice';

const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  // const token = useSelector(selectAuthToken);
  // console.log(token);
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/' />;
  // return token ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
