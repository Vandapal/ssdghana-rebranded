import Link from "next/link";
import { FaCaretDown } from "react-icons/fa6";

interface Props {
  showMobileNav: boolean;
  isActive: (path: string) => boolean;
}

export default function NavList({ showMobileNav, isActive }: Props) {
  return (
    <ul
      className={`p-0 m-0 flex flex-col gap-5 absolute w-full top-24 left-0 right-0 bg-white shadow-lg py-4 px-4 border-t-[1px] -translate-y-10 opacity-0 transition-all pointer-events-none ${
        showMobileNav && "translate-y-0 opacity-100 pointer-events-auto"
      } lg:flex-row lg:items-center lg:justify-center lg:w-fit lg:static lg:mt-0 lg:shadow-none lg:px-0 lg:py-1 lg:border-t-0 lg:-translate-y-0 lg:opacity-100 lg:pointer-events-auto`}
    >
      {/* Home link */}
      <li className={`link ${isActive("/") && "link-active"}`}>
        <Link href="/">HOME</Link>
      </li>
      {/* About us dropdown */}
      <li className={`drop-down group ${isActive("/about") && "link-active"}`}>
        <span className="link-main">
          ABOUT US <FaCaretDown className="group-hover:rotate-180 icon" />
        </span>
        <div className="drop-down-item lg:group-hover:opacity-100">
          <Link
            href="/about"
            className={`link-inner  ${isActive("/about") && "link-active"}`}
          >
            Our Mission
          </Link>
          <Link
            href="/about/work-clusters"
            className={`link-inner  ${
              isActive("/about/work-clusters") && "link-active"
            }`}
          >
            Work Clusters
          </Link>
        </div>
      </li>
      {/* Activities dropdown */}
      <li
        className={`drop-down group ${
          isActive("/activities") && "link-active"
        }`}
      >
        <span className="link-main">
          ACTIVITIES <FaCaretDown className="group-hover:rotate-180 icon" />
        </span>
        <div className="drop-down-item group-hover:opacity-100">
          {/* Inner dropdown 1 */}
          {/* Current activities */}
          <div className="group/current">
            <span
              className={`link-drop ${
                isActive("/activities/saica") && "link-active"
              }`}
            >
              CURRENT{" "}
              <FaCaretDown className="group-hover/current:-rotate-180 transform duration-300" />
            </span>
            <div className="drop-down-item-inner group-hover/current:block">
              <Link
                href="/activities/saica"
                className={`link-inner ${
                  isActive("/activities/saica") && "link-active"
                }`}
              >
                SAICA
              </Link>
            </div>
          </div>
          {/* Inner dropdown 1 */}
          {/* Past activities */}
          <div className="group/past">
            <span
              className={`link-drop ${
                isActive("/activities/stem-project") && "link-active"
              }`}
            >
              PAST{" "}
              <FaCaretDown className="group-hover/past:-rotate-180 transform duration-300" />
            </span>
            <div className="drop-down-item-inner group-hover/past:block">
              <Link
                href="/activities/stem-project"
                className={`link-inner ${
                  isActive("/activities/stem-project") && "link-active"
                }`}
              >
                STEM Bursary Scheme
              </Link>
            </div>
          </div>
        </div>
      </li>
      {/* Careers dropdown */}
      <li className={`drop-down group ${isActive('/careers') && 'link-active'}`}>
        <span className="link-main">
          CAREERS <FaCaretDown className="group-hover:rotate-180 icon" />
        </span>
        <div className="drop-down-item group-hover:opacity-100">
          <Link href="/careers/volunteers" className={`link-inner ${isActive('/careers/volunteers') && 'link-active'}`}>
            Volunteers
          </Link>
        </div>
      </li>
      {/* News link */}
      <li className={`${isActive('/news') && 'link-active'}`}>
        <Link href="/news" className="link">
          NEWS
        </Link>
      </li>
      {/* Contact Link */}
      <li className={`${isActive('/contact') && 'link-active'}`}>
        <Link href="/contact" className="link">
          CONTACT
        </Link>
      </li>
    </ul>
  );
}
