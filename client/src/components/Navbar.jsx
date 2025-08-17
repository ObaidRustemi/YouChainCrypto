import { useState } from "react";
import React from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import react from "react";

const NavBarItem = ({ title, classprops, onMarketHover }) => (
  <li 
    className={`mx-4 cursor-pointer hover:scale-150 transition-transform duration-200 relative ${classprops}`}
    onMouseEnter={() => {
      console.log('NavBarItem hover enter:', title);
      if (title === "Market") {
        console.log('Market item hovered!');
        onMarketHover(true);
      }
    }}
    onMouseLeave={() => {
      console.log('NavBarItem hover leave:', title);
      if (title === "Market") {
        console.log('Market item unhovered!');
        onMarketHover(false);
      }
    }}
  >
    {title}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSnow, setShowSnow] = useState(false);
  const [lightningActive, setLightningActive] = useState(false);
  const [thunderActive, setThunderActive] = useState(false);
  const [activeIntervals, setActiveIntervals] = useState([]);

  const triggerLightning = () => {
    setLightningActive(true);
    setTimeout(() => setLightningActive(false), 400);
    
    // Thunder follows lightning after a short delay
    setTimeout(() => {
      setThunderActive(true);
      setTimeout(() => setThunderActive(false), 600);
    }, 200);
  };

  const clearAllIntervals = () => {
    activeIntervals.forEach(interval => clearInterval(interval));
    setActiveIntervals([]);
  };

  const handleMarketHover = (isHovering) => {
    console.log('🌨️ HOVER EVENT TRIGGERED:', isHovering);
    console.log('🌨️ Setting showSnow to:', isHovering);
    setShowSnow(isHovering);
    
    if (isHovering) {
      console.log('⚡ STARTING EFFECTS!');
      
      // Immediate lightning
      setLightningActive(true);
      setThunderActive(true);
      
      setTimeout(() => {
        setLightningActive(false);
        setThunderActive(false);
      }, 1000);
      
      // Continuous lightning every 2 seconds
      const interval = setInterval(() => {
        setLightningActive(true);
        setThunderActive(true);
        setTimeout(() => {
          setLightningActive(false);
          setThunderActive(false);
        }, 500);
      }, 2000);
      
      setActiveIntervals([interval]);
    } else {
      clearAllIntervals();
    }
  };

  return (
    <>
      {/* Lightning overlay for screen flashes */}
      <div className={`lightning-overlay ${lightningActive ? 'lightning-active' : ''}`} />
      
      <nav className={`w-full flex md:justify-center justify-between items-center p-4 relative ${thunderActive ? 'thunder-shake' : ''}`}>
        {" "}
        y
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img 
          src={logo} 
          alt="logo" 
          className="w-56 cursor-pointer logo-hover" 
          onMouseEnter={() => handleMarketHover(true)}
          onMouseLeave={() => handleMarketHover(false)}
        />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem 
            key={item + index} 
            title={item} 
            classprops={item === "Market" ? "text-teal-500" : ""} 
            onMarketHover={handleMarketHover}
          />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-5 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      
      {/* Snow effect container */}
      <div className={`snow-container ${showSnow ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={()=> setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={()=> setToggleMenu(true)}
          />
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
