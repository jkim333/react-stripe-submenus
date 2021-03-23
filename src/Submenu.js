import React, { useContext, useRef, useEffect } from 'react';
import { AppContext } from './context';
import sublinks from './data';

export default function Submenu() {
  const { isSubmenuOpen, location, page } = useContext(AppContext);
  const refSubmenu = useRef(null);
  const sublink = sublinks.find((sublink) => sublink.page === page);

  useEffect(() => {
    refSubmenu.current.style.top = `${location.bottom}px`;
    refSubmenu.current.style.left = `${location.center}px`;
  }, [location]);

  return (
    <aside
      ref={refSubmenu}
      className={isSubmenuOpen ? 'submenu submenu--show' : 'submenu'}
      // style={{ top: location.bottom, left: location.center }}
    >
      {sublink && (
        <>
          <h3>{sublink.page}</h3>
          <ul>
            {sublink.links.map((link, index) => {
              const { url, icon, label } = link;
              return (
                <li key={index}>
                  <a href={url}>
                    {icon}
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </aside>
  );
}
