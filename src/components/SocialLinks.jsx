import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
         <span className="ml-3">LinkedIn</span><FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/pitta-srinu-a97aa724a/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <span className="ml-3">Github</span><FaGithub size={30} />
        </>
      ),
      href: "https://github.com/srinupitta",
    },
    {
      id: 3,
      child: (
        <>
         <span className="ml-3">Mail</span><HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:srinupittarjy@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <span className="ml-3">Leetcode</span><SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/u/srinupitta_/",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center w-40 h-14 px-4 text-white bg-gray-600 ml-[-100px] sm:hover:ml-[-10px] sm:hover:rounded-md ${link.style} duration-200`}
          >
            <a
              download={link.download}
              className="flex flex-row justify-between w-full items-center text-white"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
