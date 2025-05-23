"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down
        setShowNavbar(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-red-600/90 backdrop-blur-md p-4 flex flex-wrap justify-between items-center shadow-md shadow-red-900 gap-4 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo & Title */}
      <Link href="/" className="flex items-center gap-3 group">
        {/* Logo Circle */}
        <div className="relative bg-black rounded-full w-13 h-13 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-300">
          {/* Glow Ring Animation */}
          <span className="absolute inset-0 rounded-full border-2 border-red-500 animate-pulse opacity-50"></span>
          <img
            src="/res/f1-codex-icon.png"
            alt="F1 Codex Icon"
            className="w-10 h-10 drop-shadow-lg relative z-10"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col">
          <h1 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 tracking-wide group-hover:text-black transition-all">
            Formula One Codex
          </h1>

          {/* Racing Underline */}
          <span className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-500"></span>
        </div>
      </Link>


      {/* Navigation Links */}
      <ul className="flex gap-6 text-white text-md font-medium">
        {["drivers", "teams", "circuits", "races", "standings"].map((item) => (
          <li key={item}>
            <a href={`/${item}`} className="relative group">
              <span className="hover:text-black transition capitalize">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Search Bar */}
      <div className="hidden md:block">
        <SearchBar />
      </div>
    </nav>
  );
}
