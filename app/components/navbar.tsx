"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Events", path: "/events" },
  { name: "Core", path: "/core" },
  { name: "Heads", path: "/heads" },
];

export default function App_Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    // <nav className="bg-black shadow-md w-full px-6 py-2 flex items-center justify-between">
     
<nav className="bg-black shadow-md w-full px-6 py-2 flex items-center justify-between fixed top-0 left-0 z-50">
      
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Virsa Logo"
          width={130}
          height={130}
          priority
          unoptimized
          className="object-contain"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden sm:flex gap-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`text-xl font-medium relative group transition-colors ${
              pathname === item.path ? 'text-orange-400' : 'text-white hover:text-orange-400'
            }`}
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="sm:hidden text-white text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-black flex flex-col px-6 py-4 gap-4 z-50 sm:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-xl text-white hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
}