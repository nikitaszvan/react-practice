import React from 'react'
import './logo-navbar.styles.css'

const LogoNavbar = () => {

  const navLinks = [
    {
      id: 1,
      title: 'HOME',
      redirectLink: '#'
    },
    {
      id: 2,
      title: 'ORDER',
      redirectLink: '#'
    },
    {
      id: 3,
      title: 'FAQ',
      redirectLink: '#'
    },
    {
      id: 4,
      title: 'CONTACT',
      redirectLink: '#'
    },
  ];

  return (
    <div className='header-container'>
      <a className="home-logo" href='/'><span>Nikita's</span> PANDESAL</a>
      <div className='nav-links-container'>
      {navLinks.map((link)=>{
        return (
          <a key={link.id} href={link.redirectLink} className='nav-links'>{link.title}</a>
        )
      })}
      </div>
    </div>
  )
};

export default LogoNavbar;