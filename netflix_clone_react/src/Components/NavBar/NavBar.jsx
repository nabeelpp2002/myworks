import React, { useEffect, useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll distance as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
      <label className='nav_buttons_head'>
      <a href="App" className="nav_buttons">Home</a>
      <a href="App" className="nav_buttons">TV Shows</a>
      <a href="App" className="nav_buttons">Movies</a>
      <a href="App" className="nav_buttons">New & Popular</a>
      <a href="App" className="nav_buttons">My List</a>
      <a href="App" className="nav_buttons">Browse by Languages</a>
      </label>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  );
}

export default NavBar;
