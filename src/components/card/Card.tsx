import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 shadow-lg p-4 rounded-md group hover:scale-105 transition-transform max-w-[500px]">
      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-4xl text-white transition-all group-hover:bg-red-500">
        {icon}
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="font-bold text-3xl">{title}</h3>
        <p className="text-slate-500 text-center md:text-xl">{description}</p>
      </div>
    </div>
  );
}
