import React from 'react';
import Router from './router';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="min-h-screen relative bg-base-200">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
