import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
  // Menu Open or Close state
  const [isMenu, setIsMenu] = useState(false);
  // Window screen dimension state
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // Navbar links name
  const links = ['Link1', 'Link2', 'Link3', 'Link4'];

  //Get dimension function
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener('resize', updateDimension);

    // Reset menu open and close
    if (screenSize.width >= 1024) {
      setIsMenu(false);
    }

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  return (
    <div className="w-full navbar relative z-50 text-surface bg-primaryMain py-5 border-b border-b-interactiveMain border-opacity-10 ">
      <div className="max-w-[1240px] mx-auto flex items-center px-5 justify-between">
        {/* Logo Image */}
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>

        {/* Nav Links */}
        <div
          className={
            !isMenu
              ? 'navbarLinksContainer lg:static bg-primaryMain lg:block xl:w-7/12 fixed top-0 left-[-100%] ease-in-out h-full duration-500'
              : 'navbarLinksContainer overflow-scroll lg:static lg:bg-primaryMain fixed bg-secondaryMain top-0 left-0 w-[80%] h-full border-r border-r-interactiveMain border-opacity-10 lg:border-opacity-0 ease-in-out duration-500 p-3'
          }
        >
          {isMenu ? (
            <div className="navbarButtons lg:hidden px-3 pb-5 pt-3 flex items-center mb-10 justify-between border-b border-b-interactiveMain border-opacity-10">
              <div className="flex gap-3 flex-col sm:flex-row">
                <button className="btn btn-secondary">EN</button>
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <button
                  className="lg:hidden"
                  onClick={() => setIsMenu(!isMenu)}
                >
                  <AiOutlineClose size={35} />
                </button>
              </div>
            </div>
          ) : undefined}

          <ul className="navbarLinks flex px-5 lg:px-0 flex-col gap-8 lg:gap-8 lg:flex-row lg:items-center lg:justify-evenly">
            {links.map((text, idx) => {
              return <NavbarLinks key={idx} link={text} />;
            })}
          </ul>
        </div>

        {/* Responsive Button  */}
        {!isMenu && (
          <button className="lg:hidden" onClick={() => setIsMenu(!isMenu)}>
            <FaBars size={25} />
          </button>
        )}

        {/* Nav Buttons */}
        <div className="navbarButtons hidden lg:flex lg:justify-center gap-3">
          <button className="btn btn-secondary">EN</button>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
}

// Navbar Links Component
const NavbarLinks = ({ link }) => {
  return (
    <li>
      <Link
        to={`/${link.toLowerCase()}`}
        className="lg:font-medium text-base font-semibold lg:border-0 pb-2 pr-10 border-b border-b-interactiveMain border-opacity-10 hover:brightness-75 lg:py-4 lg:px-2"
      >
        {link}
      </Link>
    </li>
  );
};

export default Navbar;
