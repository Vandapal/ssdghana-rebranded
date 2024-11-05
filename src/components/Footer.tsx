import Link from "next/link";

export default function Footer() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-slate-800 text-white p-5">
      <p className="font-semibold text-md">&copy; 2024 SDD Ghana</p>
      <ul className="flex gap-3">
        <li>
          <Link href="/volunteers" className="uppercase">volunteers</Link>
        </li>
        <li>
          <Link href="/about" className="uppercase">about us</Link>
        </li>
        <li>
          <Link href="/staff-email" className="uppercase">staff email</Link>
        </li>
      </ul>
      <p className="lg:ml-auto">
        SDD Ghana | Built by Emmanuel Opoku-Ameyaw
      </p>
    </section>
  );
}