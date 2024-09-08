import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../images/logo_soukaina.png";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("Navigation state toggled:", !nav);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log("Scrolling to section:", id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNav(false);
      console.log(`Scrolled to ${id}`);
    } else {
      console.error(`Element with id ${id} not found`);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10 font-mono font-bold ">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto pl-6 pr-10 text-[#C5C2E1]">
        <img src={logo} alt="soukaina" className="w-32 h-28 pt-6 " />

        {/* Menu pour grand écran */}
        <ul className="hidden md:flex">
          <li
            onClick={() => scrollToSection("home")}
            className="p-4 font-mono font-bold hover:bg-[#C5C2E1] rounded-xl m-2 cursor-pointer duration-300 hover:text-[#35396C]"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="p-4 font-mono font-bold hover:bg-[#C5C2E1] rounded-xl m-2 cursor-pointer duration-300 hover:text-[#35396C]"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="p-4 font-mono font-bold hover:bg-[#C5C2E1] rounded-xl m-2 cursor-pointer duration-300 hover:text-[#35396C]"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="p-4 font-mono font-bold hover:bg-[#C5C2E1] rounded-xl m-2 cursor-pointer duration-300 hover:text-[#35396C]"
          >
            Contact
          </li>
        </ul>

        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer z-20 flex items-center"
        >
          <AiOutlineMenu
            size={20}
            className={`text-[#C5C2E1] ${nav ? "hidden" : "block"}`}
          />
          <AiOutlineClose
            size={20}
            className={`text-[#C5C2E1] ${nav ? "block" : "hidden"}`}
          />
        </div>

        {/* Menu pour mobile */}
        <ul
          className={`fixed md:hidden left-0 top-0 w-[50%] h-full bg-bg-gradient shadow-2xl shadow-[#5C99B6] ease-in-out duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li
            onClick={() => scrollToSection("home")}
            className="p-4 text-center font-mono font-bold rounded-xl hover:bg-[#C5C2E1] duration-300 text-white hover:text-[#35396C] cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="p-4 text-center font-mono font-bold rounded-xl hover:bg-[#C5C2E1] duration-300 hover:text-[#35396C] text-white cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="p-4 text-center font-mono font-bold rounded-xl hover:bg-[#C5C2E1] duration-300 hover:text-[#35396C] text-white cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="p-4 text-center font-mono font-bold rounded-xl hover:bg-[#C5C2E1] duration-300 hover:text-[#35396C] text-white cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
