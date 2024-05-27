import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='grid col-2 min-w-full grid-flow-col '>
      <h1 className="title text-8xl font-black text-teal-500 content-center">Technick.dev</h1>
      <nav className='cursive text-6xl font-thin text-fuchsia-600 content-center'>
        <ul className="flex place-content-evenly">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
