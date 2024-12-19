import React from "react";
import Image from "next/image";

export default function Project() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-700 text-white"
      id="project"
    >
      <h2 className="text-center text-3xl font-bold xs:text-4xl md:text-5xl lg:text-6xl mb-10">
        My Project
      </h2>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
            <div className="md:col-span-1">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>

                <p className="mt-4 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              <Image
                src="/project/visitor.png"
                width={1200}
                height={1200}
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
