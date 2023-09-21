import { useState } from 'react';

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className='bg-[#150E28] h-[100px] '>
    <div className=' hidden  w-full md:flex justify-between items-center px-12'>
      <h3 className=' font-bold text-sm md:text-4xl text-[#FFFFFF]'>
        get<span className='text-[#D434FE]'>linked</span>
      </h3>
      <nav className='hidden md:flex justify-between items-center space-x-4'>
        <ul className='text-white space-x-8 md:flex flex-row'>
          <li>TimeLine</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <button
          className='text-white font-bold py-2 px-4 rounded-sm'
          style={{
            background: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
          }}
        >
          Register
        </button>
      </nav>
    </div>
    {/* mobile view */}
    <div>
      <div className='w-full bg-[#150E28] h-[100px] flex justify-between items-center px-12'>
        <h3 className=' md:hidden font-bold text-sm text-[#FFFFFF]'>
          get<span className='text-[#D434FE]'>linked</span>
        </h3>
       

        {/* Mobile View */}
        {menuOpen ? (
          <img
            className='md:hidden cursor-pointer'
            src='./Images/close-menu.png'
            alt='close-menu-logo'
            onClick={toggleMenu}
          />
        ) : (
          <img
            className='md:hidden cursor-pointer'
            src='./Images/open-menu.png'
            alt='openmenu-logo'
            onClick={toggleMenu}
          />
        )}
      </div>
      
      {/* Display the menu list content under the navbar */}
      {menuOpen ? (
        <nav className='w-full md:hidden  bg-[#150E28] text-white  py-4'>
          <ul className='space-y-4'>
            <li>TimeLine</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contact</li>
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
