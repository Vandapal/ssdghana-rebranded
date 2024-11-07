"use client";
import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const pathname = usePathname();

  // Function to help get active link
  function isActive(path: string): boolean {
    if(path === '/') {
      return pathname === '/'
    }
    return pathname === path || pathname.includes(path)
  }
  return (
    <nav className="flex w-full items-center justify-between py-7 px-10 lg:px-32 bg-white text-slate-600 text-sm shadow-md !sticky top-30 left-0 right-0 z-50">
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
      <NavList showMobileNav={showMobileNav} isActive={isActive}/>
      {/* Hamburger */}
      <Hamburger
        showMobileNav={showMobileNav}
        toggleShowState={setShowMobileNav}
      />
    </nav>
  );
}
