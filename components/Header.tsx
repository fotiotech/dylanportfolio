"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleAside = () => setIsAsideOpen(!isAsideOpen);
  const toggleShare = () => setIsShareOpen(!isShareOpen);

  const shareOnSelectedPlatform = () => {
    alert("Share functionality to be implemented.");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Menu and Logo */}
      <div className="flex items-center gap-4">
        <Image
          id="menu"
          src="/menu_24dp_FILL0_wght400_GRAD0_opsz24.png"
          alt="Menu"
          width={24}
          height={24}
          className="cursor-pointer md:hidden"
          onClick={toggleAside}
        />
        <h1 className="text-xl font-bold">
          <Link href="/dyfk">Dyfk.</Link>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#service">Service</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Favorite and Share */}
      <div className="flex items-center gap-4">
        <Image
          id="favorite"
          src="/favorite_24dp_FILL0_wght400_GRAD0_opsz24.png"
          alt="Favorite"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <p id="share_btn" className="cursor-pointer" onClick={toggleShare}>
          <Image
            src="/share_24dp_FILL0_wght400_GRAD0_opsz24.png"
            alt="Share"
            width={24}
            height={24}
          />
        </p>
        {isShareOpen && (
          <div className="absolute top-16 right-4 bg-gray-700 p-4 rounded-md shadow-md">
            <Image
              id="platforms_close"
              src="/close_24dp_FILL0_wght400_GRAD0_opsz24.png"
              alt="Close Platforms"
              width={24}
              height={24}
              className="cursor-pointer mb-2"
              onClick={toggleShare}
            />
            <select
              id="platformSelect"
              title="platformSelect"
              className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
            >
              <option value="">Select Platform</option>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
              <option value="linkedin">LinkedIn</option>
            </select>
          </div>
        )}
      </div>

      {/* Mobile Aside Menu */}
      {isAsideOpen && (
        <aside className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 p-6 flex flex-col items-start gap-4">
          <Image
            id="close"
            src="/close_24dp_FILL0_wght400_GRAD0_opsz24.png"
            alt="Close"
            width={24}
            height={24}
            className="cursor-pointer self-end"
            onClick={toggleAside}
          />
          <ul className="flex flex-col gap-4 text-lg">
            <li onClick={() => setIsAsideOpen(false)}>
              <Link href="#about">About</Link>
            </li>
            <li onClick={() => setIsAsideOpen(false)}>
              <Link href="#service">Service</Link>
            </li>
            <li onClick={() => setIsAsideOpen(false)}>
              <Link href="/project">Project</Link>
            </li>
            <li onClick={() => setIsAsideOpen(false)}>
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <a href="tel:+237696210939">+237 696-210-939</a>
            </li>
          </ul>
        </aside>
      )}
    </header>
  );
};

export default Header;
