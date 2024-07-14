import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav id="navbar">
      <div id="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search!</button>
      </div>
      <div id="logo">T-Learning</div>
      <div id="navigation">
        <button>Home</button>
        <button>Sign In</button>
        <button id="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
