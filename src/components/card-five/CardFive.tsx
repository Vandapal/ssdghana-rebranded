import { ReactNode, HTMLAttributes } from "react";

interface CardFiveProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  hasDoubleContent?: boolean;
  header: string;
  subHeader: string;
  content1: string;
  content2?: string;
}

export default function CardFive({
  icon,
  header,
  subHeader,
  content1,
  content2,
  hasDoubleContent = false,
}: CardFiveProps) {
  return (
    // Card body
    <div className="bg-white shadow-md w-[90%] h-full lg:!h-fit rounded-lg">
      <div className="flex flex-col gap-2 items-center justify-center capitalize p-6">
        {/* {icon} */}
        <div className="bg-orange-100 h-16 aspect-square rounded-full flex flex-col items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{header}</h3>
        <p className="text-xs text-center text-slate-400 font-semibold tracking-wider">
          {subHeader}
        </p>
      </div>
      {/* Separator starts */}
      <div className="w-full h-[1px] bg-slate-200 mb-1" />
      {/* Separator ends */}
      <div className="flex items-center justify-center flex-col gap-1">
        {hasDoubleContent ? (
          <div className="py-2 text-slate-600 font-bold">
            <p>{content1}</p>
            <p>{content2}</p>
          </div>
        ) : (
          <p className="py-5 font-bold text-slate-600">{content1}</p>
        )}
      </div>
    </div>
  );
}
