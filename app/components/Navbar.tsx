import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <nav id="navbar">
      <div id="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search!</button>
      </div>
      <div id="logo">T-Learning</div>
      <div id="navigation">
        <button onClick={() => handleNavigation('/')}
           className="px-4 py-2 text-sm font-medium text-white rounded transition-all duration-500 hover:bg-[#FFEBCD]">Home</button>
        <button onClick={() => handleNavigation('/sign-in')} >Sign In</button>
        <button onClick={() => handleNavigation('/sign-up')} id="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
