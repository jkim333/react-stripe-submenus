import React, { useContext } from 'react';
import sublinks from './data.js';
import { FaTimes } from 'react-icons/fa';
import { AppContext } from './context';

// sidebar--show
export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);

  return (
    <aside className={isSidebarOpen ? 'sidebar sidebar--show' : 'sidebar'}>
      <div className='sidebar__container'>
        {sublinks.map((sublink, index) => {
          const { page, links } = sublink;
          return (
            <div className='sidebar__sublink' key={index}>
              <h3>{page}</h3>
              <div className='sidebar__links'>
                {links.map((link, index) => {
                  const { label, icon, url } = link;
                  return (
                    <a href={url} key={index}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
        <button className='sidebar__close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
    </aside>
  );
}
