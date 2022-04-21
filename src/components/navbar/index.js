import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-link normal-case text-xl text-base-content hover:no-underline" href="/">Botomir</a>
        <ul className="menu menu-horizontal p-0">
          <li><a className="btn btn-link normal-case text-base-content" href="/docs">Docs</a></li>
        </ul>
      </div>
      <div className="flex-none pr-3 space-x-3">
        <a href="/login" className="btn btn-outline">Login</a>
        <a href="/signup" className="btn">Sign Up</a>
      </div>
    </div>
  );
}

export default Navbar;
