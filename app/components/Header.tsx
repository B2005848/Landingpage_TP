"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/icon.svg" alt="Logo" className="w-32 h-auto" />

        <span className="ml-2 text-xl font-bold">
          <h1>THIỆN PHƯỚC</h1>
        </span>
        {/* Logo to hơn */}
      </div>

      {/* Menu desktop */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 font-bold items-center justify-center align-middle">
          <li>
            <a href="#services" className="hover:text-blue-500">
              DỊCH VỤ
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">
              GIỚI THIỆU
            </a>
          </li>
          <li>
            <a href="#location" className="hover:text-blue-500">
              ĐỊA BÀN HOẠT ĐỘNG
            </a>
          </li>
        </ul>
      </nav>

      <div className="hidden md:block shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-red-500 p-5 text-white rounded-lg">
        <h1> Hotline: 0363967726</h1>
      </div>

      {/* Icon menu mobile */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
            <li>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Dịch vụ
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#location" onClick={() => setMenuOpen(false)}>
                Địa bàn làm việc
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
