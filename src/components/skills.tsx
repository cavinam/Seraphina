import React from "react";
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      icon: "js.svg",
      name: "JavaScript",
      level: "Medium",
    },
    {
      icon: "typescript.svg",
      name: "TypeScript",
      level: "Medium",
    },
    {
      icon: "php.svg",
      name: "PHP",
      level: "Medium",
    },
    {
      icon: "nodejs.svg",
      name: "Node JS",
      level: "Beginner",
    },
    {
      icon: "reactjs.svg",
      name: "React.JS",
      level: "Beginner",
    },
    {
      icon: "nextjs.svg",
      name: "Next.JS",
      level: "Beginner",
    },
    {
      icon: "tailwind.svg",
      name: "Tailwind",
      level: "Medium",
    },
    {
      icon: "postgre.svg",
      name: "Postgre",
      level: "Medium",
    },
    {
      icon: "mikrotik.svg",
      name: "Mikrotik",
      level: "Medium",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-700 text-white"
      id="skill"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold xs:text-4xl md:text-5xl lg:text-6xl mb-10">
          Skills
        </h2>
        <p className="text-center font-bold text-gray-300 mb-8">
          This What Im Capable Of.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gradient-to-t from-black to-gray-700 rounded-md shadow-md p-4 text-center"
            >
              <Image
                src={`/skill/${skill.icon}`}
                alt={skill.name}
                width={25}
                height={25}
                className="w-16 h-16 mx-auto mb-2"
              />
              <h3 className="text-lg font-medium mb-1">{skill.name}</h3>
              <p className="text-gray-500 font-bold">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
