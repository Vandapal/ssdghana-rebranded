// import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 shadow-xl p-4 rounded-md group hover:bg-orange-400 hover:text-white transition-transform max-w-[500px] relative overflow-clip">
      <svg
        viewBox="0 0 3054 3054"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-0 absolute -bottom-[400px] -right-28 animation-bounce group-hover:opacity-100"
      >
        <circle
          cx="1527"
          cy="1527"
          r="1520.5"
          stroke="white"
          stroke-width="13"
          className="opacity-50"
        />
        <circle
          cx="1527"
          cy="1527"
          r="1313.5"
          stroke="white"
          stroke-width="13"
          className="opacity-50"
        />
        <circle
          cx="1526.5"
          cy="1526.5"
          r="1153"
          stroke="white"
          stroke-width="13"
          className="opacity-50"
        />
        <circle
          cx="1526.5"
          cy="1526.5"
          r="984"
          stroke="white"
          stroke-width="13"
          className="opacity-50"
        />
        <circle
          cx="1526.5"
          cy="1526.5"
          r="826"
          stroke="white"
          stroke-width="13"
          className="opacity-50"
        />
        <circle
          cx="1526.5"
          cy="1526.5"
          r="684"
          stroke="white"
          stroke-width="13"
          className="opacity-50"
        />
        <circle
          cx="1526.5"
          cy="1526.5"
          r="528"
          stroke="white"
          stroke-width="13"
          className="opacity-50"
        />
        <circle
          cx="1527"
          cy="1527"
          r="367.5"
          stroke="white"
          stroke-width="13"
          className="opacity-50"
        />
      </svg>

      <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center text-4xl text-white transition-all group-hover:bg-white group-hover:text-black">
        {icon}
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="font-bold text-3xl group-hover:drop-shadow-lg">{title}</h3>
        <p className="text-slate-500 text-center text-light md:text-xl group-hover:text-white group-hover:drop-shadow-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
