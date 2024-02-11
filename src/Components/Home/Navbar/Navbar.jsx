import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from "../../../Images/logo1.png"

const Navbar = () => {
  const [isListVisible, setListVisibility] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleList = () => {
    setListVisibility(!isListVisible);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (

    <div className="n-wrapper">
      <div div className="n-left" >
        <div className="n-name">
        <img src={Logo} width={70} alt="Logo" />
        </div>
      </div >
      <div className="n-right">
        <ul>
          <li>
            <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
              Home
            </Link>
          </li>
          <li>
            <Link spy={true} to="Services" smooth={true}>
              Services
            </Link>
          </li>
          <li>
            <Link spy={true} to="ChatBox" smooth={true}>
              ChatBox
            </Link>
          </li>
          <li>
            <Link spy={true} to="Portfolio" smooth={true}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link spy={true} to="Testimonials" smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;