import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import UserDetails from './components/userDetails';
import UserList from './components/userList/UserList';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/users' element={<UserList />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='*' element={<Navigate to='/users' />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
