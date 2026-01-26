"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Categories", href: "/categories" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0e0b1f]/95 backdrop-blur border-b border-purple-800/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/img/logo.png"
            alt="Dynamic IT Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl sm:text-2xl font-bold text-white">
            Dynamic<span className="text-purple-400">IT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative text-gray-300 font-medium transition hover:text-purple-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-[2px] bg-purple-400" />
          <span className="w-6 h-[2px] bg-purple-400" />
          <span className="w-6 h-[2px] bg-purple-400" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0e0b1f] border-t border-purple-800/30">
          <ul className="flex flex-col px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-300 font-medium hover:text-purple-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}