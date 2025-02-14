"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
          Hà Nguyễn Trường Giang
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 p-5 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ zIndex: 1000 }}
      >
        <button
          className="text-white absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <ul className="mt-10 space-y-4">
          {["ABOUT", "EXPERIENCE", "SKILLS", "EDUCATION", "PROJECTS"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  href={`/#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-white transition duration-300 hover:text-pink-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
