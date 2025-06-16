import css from "../assets/css.png";
import express from "../assets/express.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import mysql from "../assets/mysql.png";
import node from "../assets/nodeee.png";
import python from "../assets/python.png";
import react from "../assets/react.png";

const Experience = () => {
  const techs = [
    { id: 1, src: python, style: "shadow-yellow-500", title: "Python" },
    { id: 2, src: html, style: "shadow-orange-500", title: "HTML" },
    { id: 3, src: css, style: "shadow-blue-500", title: "CSS" },
    { id: 4, src: js, style: "shadow-yellow-500", title: "JavaScript" },
    { id: 5, src: react, style: "shadow-blue-500", title: "React.js" },
    { id: 6, src: node, style: "shadow-green-500", title: "Node.js" },
    { id: 7, src: express, style: "shadow-gray-500", title: "Express.js" },
    { id: 8, src: mysql, style: "shadow-orange-900", title: "MySQL" },
    
  ];

  return (
    <div name="experience" className="bg-mySignatureColor w-full pt-20 pb-20">
      <div className="max-w-screen-lg flex flex-col px-4 mx-auto w-full h-full justify-center text-white">
        <div>
          <p className="text-3xl border-b-2 text-yellow-500  border-gray-500 inline">Experience</p>
          <p className="py-7">These are the technologies I worked with !!</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-4">
          {techs.map(({ id, src, style, title, pstyle }) => (
            <div key={id} className={`shadow-md ${style} sm:hover:scale-105 duration-500 py-2 rounded-lg`}>
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className={`mt-4 ${pstyle}`}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
