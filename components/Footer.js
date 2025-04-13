"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-red-600/90 backdrop-blur-md text-gray-300 text-center px-4 py-4 relative">
      
      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-900/80 text-white p-3 rounded-full shadow-lg border border-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Back to Top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      <p className="text-sm">
        © {new Date().getFullYear()} Formula One Codex. Built with passion.
      </p>
    </footer>
  );
}
