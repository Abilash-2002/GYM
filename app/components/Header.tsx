"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useTogglerContext } from "../context/toggler";
import { usePathname } from "next/navigation";

function Header() {
  const { setMobileNavbar, setAboutSidebar } = useTogglerContext();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onPageScroll = () => {
      if (headerRef.current) {
        headerRef.current.style.backgroundColor =
          window.scrollY > 20 ? 'black' : 'transparent';
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="header">
      <header
        className="fixed inset-x-0 top-0 duration-300 ease-linear text-white flex justify-between items-center py-6 px-8 z-50"
        ref={headerRef}
      >
        <div>
        <h1 className="px-4 font-serif text-2xl"> VIGNESH FITNESS</h1>
          {/* <Link href="/">
            <Image
              src="/images/logo/logo-white.svg"
              alt="logo"
              width={160}
              height={160}
            />
          </Link> */}
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/about" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/gallery" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/contact" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Contact
          </Link>
          {/* <Link
            href="/pricing"
            className={`hover:text-[#ff0336] ${
              usePathname() === "/pricing" ? "text-[#ff0336]" : ""
            } duration-300 ease-linear`}
          >
            Pricing
          </Link> */}
          </div>
        <div className="flex items-center gap-6">
          <Link
            className="border-[rgb(255,255,255,0.3)] border-2 py-2 px-2 rounded-md group hidden lg:flex items-center gap-4"
            href="/contact"
          >
            <i className="fa-solid fa-plus bg-[#FF0336] text-white p-2.5 rounded-md group-hover:rotate-[180deg] duration-300 ease-linear"></i>
            <h3 className="text-white text-[0.875rem] mr-4 font-bold uppercase tracking-wider">
              join class now
            </h3>
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Header;
