import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 text-slate-500 py-5 mt-[68px] mx-20">
      <p className="font-semibold text-md">&copy; 2024 SDD Ghana</p>
      <ul className="flex gap-3">
        <li>
          <Link href="/volunteers" className="uppercase font-light hover:font-semibold">
            volunteers
          </Link>
        </li>
        <li>
          <Link href="/about" className="uppercase font-light hover:font-semibold">
            about us
          </Link>
        </li>
        <li>
          <Link href="/staff-email" className="uppercase font-light hover:font-semibold">
            staff email
          </Link>
        </li>
      </ul>
      <p className="lg:ml-auto inline-flex gap-1 mr-10 font-light">
        SDD Ghana | <Link href="">Built by Salvatore Brothers </Link>
      </p>
    </footer>
  );
}
