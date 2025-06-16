import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center bg-navColor text-white h-16 w-full px-4 fixed top-0 z-50">
      <Link to="home" smooth duration={500} className="sm:hover:cursor-pointer text-2xl font-signature text-headColor ml-2">
        Srinu's Portfolio
      </Link>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer font-medium text-white sm:hover:scale-105 capitalize sm:hover:text-yellow-500 duration-300">
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="pr-4 z-10 cursor-pointer md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-700 text-white">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 py-6 cursor-pointer text-4xl capitalize">
              <Link to={link} onClick={() => setNav(!nav)} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
