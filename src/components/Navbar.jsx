import React, { useEffect, useState } from 'react'
import data from '../data/data.json'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  console.log(data.navbar.menu, "ini menu");
  

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled)
    };     

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <nav className={`flex justify-between items-center fixed z-10 px-10 py-5 transition-all duration-300 ${scrolled ? 'bg-blue-200 shadow-md' : 'bg-transparent'}`}>
      <img src={data.navbar.logo} width='25%' />
      <ul className="flex gap-6 text-black text-2xl  font-medium">
        {data.navbar.menu.map((item, index) => {
         return (
           <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar