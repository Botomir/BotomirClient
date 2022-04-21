import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-link normal-case text-xl text-base-content" href="/">Botomir</a>
        <ul className="menu menu-horizontal p-0">
          <li><a className="btn btn-link normal-case text-base-content" href="/">Docs</a></li>
          <li><a className="btn btn-link normal-case text-base-content" href="/">Stats</a></li>
        </ul>
      </div>
      <div className="flex-none pr-3 space-x-3">
        <a href="/" className="btn btn-outline">Login</a>
        <a href="/" className="btn btn-primary">Sign Up</a>
      </div>
    </div>
  );
}

export default Navbar;
