import React, {useState} from "react";
import logo from "../assets/White Logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [navBar, setNavBar] = useState(false);

  const navToggle = ()=>{
    setNavBar(!navBar)
  }

  return (
    <div className="relative bg-dragonlordPurple h-[77px] flex items-center ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="main logo" className="mb-3 px-" />
        </div>

        {/* nav-menu-items */}
        <div className="hidden flex-row gap-7 text-white font-inter font-medium md:flex ">
          <a href="#">SERVICES</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
          <a href="#">CAREERS</a>
        </div>

        <div className="text-white text-3xl block  md:hidden"  onClick={navToggle}>
          {!navBar ? <AiOutlineClose/> : <AiOutlineMenu/>   }
        </div>

        {/* mobile-menu */}
        <div className={!navBar ? "absolute left-0 right-0 top-0 bg-dragonlordPurple flex flex-col items-center space-y-4 p-5 mt-[76px]  text-white font-inter font-medium z-0" :"-mt-28 absolute" }>
          <a href="#">SERVICES</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
          <a href="#">CAREERS</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
