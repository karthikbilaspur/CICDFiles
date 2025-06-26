import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ClassSchedule from './components/ClassSchedule';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Payment from './components/Payment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/classes" element={<ClassSchedule />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;