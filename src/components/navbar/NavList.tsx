"use client";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa6";

interface Props {
  showMobileNav: boolean;
}

export default function NavList({ showMobileNav }: Props) {
  return (
    <ul
      className={`p-0 m-0 flex flex-col gap-5 absolute w-full top-24 left-0 right-0 bg-white shadow-lg py-4 px-4 border-t-[1px] -translate-y-10 opacity-0 transition-all pointer-events-none ${showMobileNav && "translate-y-0 opacity-100 pointer-events-auto"} lg:flex-row lg:items-center lg:justify-center lg:w-fit lg:static lg:mt-0 lg:shadow-none lg:px-0 lg:py-1 lg:border-t-0 lg:-translate-y-0 lg:opacity-100 lg:pointer-events-auto`}
    >
      {/* Home link */}
      <li className="link">
        <Link href="/">HOME</Link>
      </li>
      {/* About us dropdown */}
      <li className="drop-down group">
        <span className="link-main">
          ABOUT US <FaCaretDown className="group-hover:rotate-180 icon" />
        </span>
        <div className="drop-down-item lg:group-hover:opacity-100">
          <Link href="/about" className="link-inner">
            Our Mission
          </Link>
          <Link href="/about/work-clusters" className="link-inner">
            Work Clusters
          </Link>
        </div>
      </li>
      {/* Activities dropdown */}
      <li className="drop-down group">
        <span className="link-main">
          ACTIVITIES <FaCaretDown className="group-hover:rotate-180 icon" />
        </span>
        <div className="drop-down-item group-hover:opacity-100">
          {/* Inner dropdown 1 */}
          {/* Current activities */}
          <div className="group/current">
            <span className="link-drop">
              CURRENT{" "}
              <FaCaretDown className="group-hover/current:-rotate-180 transform duration-300" />
            </span>
            <div className="drop-down-item-inner group-hover/current:block">
              <Link href="/current-projects/saica" className="link-inner">
                SAICA
              </Link>
            </div>
          </div>
          {/* Inner dropdown 1 */}
          {/* Past activities */}
          <div className="group/past">
            <span className="link-drop">
              PAST{" "}
              <FaCaretDown className="group-hover/past:-rotate-180 transform duration-300" />
            </span>
            <div className="drop-down-item-inner group-hover/past:block">
              <Link href="/past-projects/stem-project" className="link-inner">
                STEM Bursary Scheme
              </Link>
            </div>
          </div>
        </div>
      </li>
      {/* Careers dropdown */}
      <li className="drop-down group">
        <span className="link-main">
          CAREERS <FaCaretDown className="group-hover:rotate-180 icon" />
        </span>
        <div className="drop-down-item group-hover:opacity-100">
          <Link href="/careers/volunteers" className="link-inner">
            Volunteers
          </Link>
        </div>
      </li>
      {/* News link */}
      <li>
        <Link href="/news" className="link">
          NEWS
        </Link>
      </li>
      {/* Contact Link */}
      <li>
        <Link href="/contact" className="link">
          CONTACT
        </Link>
      </li>
    </ul>
  );
}
