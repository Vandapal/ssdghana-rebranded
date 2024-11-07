import Image from "next/image";
import Link from "next/link";

export default function StemProjectPage() {
  return (
    <main className="my-6 md:h-[72dvh] lg:h-fit">
      {/* Top text */}
      <div className="mb-5 flex flex-col gap-8 font-light w-[90%] mx-auto">
        <h1 className="text-center text-3xl font-bold relative w-fit mx-auto after:absolute after:w-20 after:h-1 after:bg-orange-500 after:bottom-0 after:left-0 after:right-0 after:top-10">
          STEM Bursary Scheme
        </h1>
        <p className="text-xl text-center mx-10 lg:w-1/2 lg:mx-auto">
          <b>SDD Ghana&apos;s STEM Bursary Scheme</b> is aimed at supporting
          students in STEM-related programs in the various public universities
          in Ghana.
        </p>
      </div>
      {/* Text and image */}
      <div className="flex flex-col gap-5 mx-20 mt-10 lg:flex-row">
        <div className="">
          <Image src="/assets/back.jpg" alt="" width={1100} height={1100} className="stem-img "></Image>
          <Image src="/assets/back.jpg" alt="" width={1100} height={1100} className="stem-img -mt-28 ml-20"></Image>
        </div>
        <div>
          {/* Double paragraph */}
          <div className="flex flex-col gap-5 text-justify leading-7 lg:ml-20 lg:text-left">
            <p className="stem-text">
              This is partially attributed to the increasing need for
              industrialization and the growing demand for innovation to expand
              economies and solve unemployment in developing countries like
              Ghana which is focused on pursuing industrialization, economic
              growth, and diversifying economic opportunities. Promoting STEM
              and increasing enrollment and interest of young people in
              STEM-related programmes in higher institutions of learning are
              important.
            </p>
            <p className="stem-text">
              SDD Ghana&pos;s &apos;Creating the Next Einsteins&pos; Project
              will give one-off bursaries, and hand holding support from
              accomplished scientists across various industries to successful
              applicants for the 2021/2022 academic year.
            </p>
          </div>
          {/* Successful candidates */}
          <div className="ml-auto mt-10 flex flex-col gap-5 lg:w-[80%]">
            <h3 className="text-4xl text-orange-400 font-semibold text-center lg:text-left">100 + Successful Candidates</h3>
            <p className="stem-text">
              Names of successful candidates for the Next Einsteins Project can
              be accessed <Link href='' className="underline font-semibold">here</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
