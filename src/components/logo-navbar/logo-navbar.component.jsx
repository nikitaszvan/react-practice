import React from 'react';
import { Link } from 'react-router-dom';
import './logo-navbar.styles.css'

const LogoNavbar = () => {

  const navLinks = [
    {
      id: 1,
      title: 'HOME',
      redirectLink: '/'
    },
    {
      id: 2,
      title: 'ORDER',
      redirectLink: '/order'
    },
    {
      id: 3,
      title: 'FAQ',
      redirectLink: '/faq'
    },
    {
      id: 4,
      title: 'CONTACT',
      redirectLink: '/contact'
    },
  ];
  console.log('render', new Date());

  return (
    <div className='header-container'>
      <a className="home-logo" href='/'><span>Nikita's</span> PANDESAL</a>
      <div className='nav-links-container'>
      {navLinks.map((link)=>{
        return (
          <Link to={link.redirectLink} className='nav-links' key={link.id}>{link.title}</Link>
        )
      })}
      </div>
    </div>
  )
};

export default LogoNavbar;