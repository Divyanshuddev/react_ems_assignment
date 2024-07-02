import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';

const App = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/admindashboard' element={<AdminDashboard />} />
  </Routes>
);

export default App;
