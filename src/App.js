// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { adminRoutes, authAdminRoutes, authRoutes, userRoutes } from './routes/routes';

import AuthLayout from './layouts/authLayout';
import AdminLayout from './layouts/adminLayout';
import Home from './pages/user/home/Home';
import Error from './pages/error';
import ProtectedRoutes from './components/protectedRoutes';
import { history } from './utils/history';
import CustomRouter from './components/customRouter';
import CustomerLayout from './layouts/customerLayout';

function App() {
  return (
    // <Router>
    <CustomRouter history={history}>
      <Routes>
        <Route element={<CustomerLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='*' element={<Error />} />

        <Route path='admin/auth' element={<AuthLayout />}>
          {authAdminRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} index={route.index} path={route.path} element={<Page />} />;
          })}
        </Route>

        <Route path='auth' element={<AuthLayout />}>
          {authRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} index={route.index} path={route.path} element={<Page />} />;
          })}
        </Route>

        <Route element={<CustomerLayout />}>
          {userRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route key={index} path={route.path} element={<Page />}>
                {route.children &&
                  route.children.map((routeChild, index) => {
                    const ChildrenPage = routeChild.component;
                    return <Route key={index} path={routeChild.path} element={<ChildrenPage />} />;
                  })}
              </Route>
            );
          })}
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path='admin' element={<AdminLayout />}>
            {adminRoutes.map((route, index) => {
              const Page = route.component || '';
              return (
                <Route key={index} path={route.path} index={route.index ?? false} element={<Page />}>
                  {route.children &&
                    route.children.map((routeChild, index) => {
                      const ChildrenPage = routeChild.component;
                      return (
                        <Route
                          key={index}
                          index={routeChild.index ?? false}
                          path={routeChild.path}
                          element={<ChildrenPage />}
                        />
                      );
                    })}
                </Route>
              );
            })}
          </Route>
        </Route>
      </Routes>
    </CustomRouter>
    // </Router>
  );
}

export default App;
