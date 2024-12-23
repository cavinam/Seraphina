import React from "react";

export default function Experience() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-700 text-white"
      id="experience"
    >
      <h2 className="text-center text-3xl font-bold xs:text-4xl md:text-5xl lg:text-6xl mb-10">
        My Experiences
      </h2>
      <a className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 z-10">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-xl">
              PT. G-Tekt Indonesia Manufacturing
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-100">
              IT Engineer
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-pretty text-lg text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>
        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-xl font-medium text-white">2021 - Present</dt>
          </div>
          {/* 
          <div className="flex flex-col-reverse">
            <dt className="text-xl font-medium text-white">2021 - Present</dt>
          </div> */}
        </dl>
      </a>

      <a className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 my-5">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-xl">
              Hotel Harper By Aston
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-100">Engineer</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-pretty text-lg text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>
        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-xl font-medium text-white">2020 - 2021</dt>
          </div>
        </dl>
      </a>

      <a className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-xl">
              Freelancer
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-100">
              Search Engine Evaluator
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-pretty text-lg text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>
        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-xl font-medium text-white">2020 - 2021</dt>
          </div>
        </dl>
      </a>
    </div>
  );
}
