import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-700 text-white"
      id="hero"
    >
      <Image
        src={"/Heroo.png"}
        alt="Profile"
        width={360}
        height={360}
        className="my-5"
      />
      <h1 className="text-xl font-bold">Cavin</h1>
      <h2 className="text-2xl mt-2 font-bold">Full-Stack Web Developer</h2>
      <p className="mt-4 my-4 text-center max-w-lg font-bold font-serif">
        Building scalable and high-performance web solutions for your business
        needs.
      </p>
      <div className="flex space-x-4">
        <Link href="https://github.com/cavinam">
          <Image
            src={"/contact/github.svg"}
            alt="linkedin"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/cavin-aditya-mahatvayodha-256805318?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNsX9mU55SBWU1P1K4o2DtA%3D%3Dhttps://www.linkedin.com/in/cavin-aditya-mahatvayodha-256805318/">
          <Image
            src={"/contact/linkedin.svg"}
            alt="linkedin"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://www.instagram.com/cavinaditya">
          <Image
            src={"/contact/ig.svg"}
            alt="linkedin"
            width={32}
            height={32}
          />
        </Link>
      </div>
      <a
        href="#aboutme"
        className="mt-6 px-4 py-2 bg-gradient-to-b border-spacing-4 from-black to-gray-700 rounded-md"
      >
        View Portfolio
      </a>
    </div>
  );
};

export default Hero;
