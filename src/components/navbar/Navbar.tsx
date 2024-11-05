"use client"
import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import Hamburger from "./Hamburger";
import { useState } from "react";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  return (
    <nav className="flex w-full items-center justify-between py-7 px-10 lg:px-32 bg-white text-slate-600 text-sm shadow-md relative">
      <Link className="flex gap-2 justify-center items-center" href="/">
        {/* To be replaced with icon */}
        <Image
          src="/assets/logo.png"
          alt="SDD Ghana Logo"
          width={50}
          height={50}
        />
        <h1 className="text-xl font-bold text-green-600">SDD Ghana</h1>
      </Link>
      {/* List item */}
      <NavList showMobileNav={showMobileNav}/>
      {/* Hamburger */}
      <Hamburger showMobileNav={showMobileNav} toggleShowState={setShowMobileNav}/>
    </nav>
  );
}
