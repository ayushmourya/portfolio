import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='navbar'>
    <div className='navbar__title navbar__item'>Ayush Mourya's Portfolio</div>
    <div className='navbar__item'> <Link to="/about" style={{ textDecoration: 'none', color: 'white'}}>About</Link></div>
    <div className='navbar__item'> <Link to="/resume" style={{ textDecoration: 'none', color: 'white'}}>Resume</Link></div>
    <div className='navbar__item'> <Link to="/projects" style={{ textDecoration: 'none', color: 'white'}}>Projects</Link></div>    
    <div className='navbar__item'> <Link to="/contact" style={{ textDecoration: 'none', color: 'white'}}>Contact</Link></div>        
</header>
  )
}

export default Navbar