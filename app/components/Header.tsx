"use client";

import { useState } from "react";
import Script from "next/script";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 font-sans bg-white rounded-lg shadow-md">
      {/* Logo */}
      <Script
        src="/js/scrollAnimation.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      ></Script>
      <div className="flex items-center">
        <img src="/icon.svg" alt="Logo" className="w-32 h-auto" />

        <span className="ml-2 text-xl font-bold">
          <h1>THIỆN PHƯỚC</h1>
        </span>
        {/* Logo to hơn */}
      </div>

      {/* Menu desktop */}
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center space-x-6 font-bold align-middle">
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
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61579351585076"
              className="hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIÊN HỆ NGAY
            </a>
          </li>
        </ul>
      </nav>

      {/* Icon menu mobile */}
      <button
        className="flex flex-col space-y-1 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="absolute left-0 w-full bg-white shadow-md top-16 md:hidden">
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
