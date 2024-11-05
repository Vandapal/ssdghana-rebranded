import React, { Dispatch, SetStateAction } from "react";

interface Props {
  toggleShowState: Dispatch<SetStateAction<boolean>>;
  showMobileNav: boolean;
}

export default function Hamburger({ toggleShowState, showMobileNav }: Props) {
  return (
    <div
      className="flex flex-col gap-1 cursor-pointer group transition-all md:flex lg:hidden"
      onClick={() => toggleShowState((prev: boolean) => !prev)}
    >
      <div className={`hamburger-line ${showMobileNav && "rotate-45 translate-y-2.5"}`}></div>
      <div className={`hamburger-line ${showMobileNav && "opacity-0"}`}></div>
      <div className={`hamburger-line ${showMobileNav && "-rotate-45 -translate-y-1"}`}></div>
    </div>
  );
}
