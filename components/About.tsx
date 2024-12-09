'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/3 flex justify-center">
          <Image
            src="/me.jpg"
            alt="Picture of me"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>

        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            About <span className="text-blue-500">me</span>
          </h2>

          <div className="text-gray-700 space-y-2">
            <strong className="block text-xl font-semibold">
              I have a strong passion for tech and started coding while studying in high school.
            </strong>
            <p className="text-lg">
              I'm passionate about coding, learning new things, and thinking about what's next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
