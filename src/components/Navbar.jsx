import React, { useEffect, useState } from 'react'
import data from '../data/data.json'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled)
    };     

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className={`flex justify-between items-center fixed z-10 px-4 md:px-10 py-5 w-full transition-all duration-300 ${scrolled ? 'bg-blue-200 shadow-md' : 'bg-transparent'}`}>
      <img src={data.navbar.logo} width='25%' />

      {/* Hamburger icon - visible only on small screens */}
      <button 
        className="md:hidden block text-black focus:outline-none button-nav"
        onClick={toggleMenu}
      >
        {/* Hamburger icon (3 bars) */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Navigation menu */}
      <ul className={`md:flex gap-6 text-black text-2xl font-medium ${menuOpen ? 'block absolute top-[100%] left-0 w-full bg-blue-200 p-5 md:static' : 'hidden'} md:block`}>
        {data.navbar.menu.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;
