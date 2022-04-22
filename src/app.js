import React, { useEffect } from 'react';
import Router from './router';
import { Footer, Navbar } from './components';
import { themeChange } from 'theme-change';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="min-h-screen relative bg-base-100">
      <Navbar />
      <div className="pb-60">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
