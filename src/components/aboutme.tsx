import * as React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-700 text-white"
      id="aboutme"
    >
      <div>
        <h1 className="text-center text-3xl font-bold xs:text-4xl md:text-5xl lg:text-6xl mb-10">
          About Me
        </h1>
        <h2 className="max-w-full text-center text-gray xs:max-w-[840px] md:max-w-screen-sm lg:max-w-screen-md lg:text-lg ">
          Hi, I’m Cavin Aditya Mahatvayodha, a 27-year-old IT professional
          currently working as an IT Support Specialist in the manufacturing
          industry. My expertise spans various technologies, including
          TypeScript, Next.js, Tailwind CSS, Postman, PostgreSQL, React.js, and
          Node.js.
        </h2>
        <h3 className="max-w-full text-center text-gray xs:max-w-[840px] md:max-w-screen-sm lg:max-w-screen-md lg:text-lg">
          I’m passionate about leveraging these skills to build efficient
          solutions, streamline workflows, and enhance user experiences. I
          thrive in dynamic environments where I can solve complex problems,
          collaborate with teams, and continuously learn new technologies to
          stay ahead in the fast-evolving tech landscape. Outside of work, I
          enjoy exploring emerging trends in technology and sharing insights
          with others who share the same enthusiasm
        </h3>
      </div>
    </div>
  );
};

export default About;
