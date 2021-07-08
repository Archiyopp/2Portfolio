import React, { useState } from 'react';
import NavLinks from './navLinks';
import NavHeader from './navHeader';
import NavThemes from './navThemes';
import SocialNav from './socialNav';

interface NavProps {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: any;
}

export default function Navbar({ setTheme, toggleTheme }: NavProps) {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className="shadow-2xl bg-base-200">
      <nav className="max-w-screen-xl mx-auto my-auto p-2 sm:flex sm:items-center sm:justify-between">
        <NavHeader
          toggleTheme={toggleTheme}
          setShowLinks={setShowLinks}
          showLinks={showLinks}
        />
        <ul
          className={`${
            showLinks
              ? `divide-y divide-secondary sm:divide-none sm:flex sm:items-center`
              : `hidden sm:flex sm:items-center`
          }`}
        >
          <NavLinks />
        </ul>
        <NavThemes setTheme={setTheme} />
        <SocialNav />
      </nav>
    </header>
  );
}
