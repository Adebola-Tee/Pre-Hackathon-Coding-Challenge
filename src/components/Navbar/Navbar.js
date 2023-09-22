import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-[#150E28] fixed top-0 left-0 right-0 h-[100px] w-full z-10'>
      <div className='hidden pt-12 w-full md:flex justify-between items-center px-20'>
        {!menuOpen && (
          <h3 className='font-bold font-montserrat text-sm md:text-4xl text-[#FFFFFF]'>
            get<span className='text-[#D434FE]'>linked</span>
          </h3>
        )}
        <nav className='hidden md:flex justify-between items-center md:space-x-36 lg:space-x-44'>
          <ul className='text-white space-x-8 md:flex flex-row'>
            <li className=''><a href='#'>TimeLine</a></li>
            <li className=''><a href='#'>Overview</a></li>
            <li className=''><a href='#'>FAQs</a></li>
            <li className=''><a href='#'>Contact</a></li>
          </ul>
          <button
            className='text-white font-bold py-2 px-4 rounded-sm'
            style={{
              background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
            }}
            onClick={toggleMenu}
          >
            Register
          </button>
        </nav>
      </div>
      {/* mobile view */}
      <div>
        <div className='w-full bg-[#150E28] h-[100px] flex justify-between items-center px-12'>
          {!menuOpen && (
            <h3 className='md:hidden font-bold text-sm text-[#FFFFFF]'>
              get<span className='text-[#D434FE]'>linked</span>
            </h3>
          )}
          {/* Mobile View */}
          <img
            className='md:hidden'
            src={menuOpen ? './Images/close-menu.png' : './Images/open-menu.png'}
            alt={menuOpen ? 'close-menu-logo' : 'open-menu-logo'}
            onClick={toggleMenu}
          />
        </div>
        {/* Display the menu list content under the navbar */}
        {menuOpen ? (
          <nav
            className='w-full md:hidden bg-[#150E28] text-white pl-12 py-4 absolute top-[100px] left-0 h-[calc(100vh-100px)]'
            onClick={toggleMenu}
          >
            <ul className='space-y-4'>
              <li><a href='#'>TimeLine</a></li>
              <li><a href='#'>Overview</a></li>
              <li><a href='#'>FAQs</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
            <button
              className='text-white font-bold py-2 px-4 rounded-sm mt-4'
              style={{
                background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
              }}
            >
              Register
            </button>
          </nav>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
