import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';

const roll = localStorage.getItem('roll')
const App = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    { roll==="admin"? <Route path='/dashboard' element={<AdminDashboard />} />:<Route path='/dashboard' element={<EmployeeDashboard />} />}
  </Routes>
);

export default App;
