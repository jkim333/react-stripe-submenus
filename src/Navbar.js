import React, { useContext } from 'react';
import sublinks from './data.js';
import logo from './images/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AppContext } from './context';

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useContext(AppContext);

  const handleSubmenu = (e) => {
    if (e.target.className !== 'link-btn') {
      closeSubmenu();
    }
  };

  return (
    <nav className='navbar' onMouseOver={handleSubmenu}>
      <div className='navbar__container'>
        <div className='navbar__header'>
          <img src={logo} alt='stripe' className='navbar__logo' />
          <button className='navbar__burger' onClick={openSidebar}>
            <GiHamburgerMenu />
          </button>
        </div>
        <ul className='navbar__links'>
          {sublinks.map((sublink, index) => {
            const { page } = sublink;
            return (
              <li key={index}>
                <button
                  className='link-btn'
                  onMouseOver={(e) => openSubmenu(e)}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className='btn'>sign in</button>
      </div>
    </nav>
  );
}
