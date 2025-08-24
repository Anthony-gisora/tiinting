import React, { useState, useEffect } from "react";
import profImg from "../../pages/home/postimg.png";
import { useNavigate } from "react-router-dom";

const LoggedNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Detect scroll shrink + progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollY / totalHeight) * 100;

      setScrollProgress(progress);
      setScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between transition-all duration-300 z-50 px-6 ${
          scrolled
            ? "bg-white/70 text-gray-900 shadow-lg py-2 backdrop-blur-xl"
            : "bg-white/40 text-gray-900 py-4 backdrop-blur-2xl"
        }`}
      >
        {/* Profile Picture */}
        <div className="flex items-center space-x-3">
          <img
            src={profImg}
            alt="Profile"
            className={`rounded-full object-cover border border-gray-300 transition-all duration-300 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            }`}
          />
          <span
            className={`hidden sm:inline font-semibold transition-all duration-300 ${
              scrolled ? "text-sm" : "text-base"
            }`}
          >
            My Profile
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 font-medium">
          <li>
            <button
              onClick={() => navigate("/")}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/create")}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Create Post
            </button>
          </li>
          <li>
            <a
              href="#profile"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Profile
            </a>
          </li>
        </ul>

        {/* Mobile Menu (hamburger) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-4 w-48 bg-white/90 text-gray-800 shadow-lg rounded-xl md:hidden animate-fadeIn backdrop-blur-md">
            <ul className="flex flex-col space-y-3 p-4 font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#create"
                  className="hover:text-blue-600 transition-colors"
                >
                  Create Post
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  className="hover:text-blue-600 transition-colors"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default LoggedNav;
