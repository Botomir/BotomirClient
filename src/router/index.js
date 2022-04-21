import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About, Contact, Docs, Home, Login, NotFound, SignUp, Stats,
} from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
