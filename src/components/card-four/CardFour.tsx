import Image from "next/image";
import { ReactNode } from "react";

export interface CardFourProps {
  title: string;
  imageUrl: string;
  icon?: ReactNode;
  description: string;
  hasAnotherDescription?: boolean;
  otherIcon?: ReactNode;
  otherDescription?: string;
}

export default function CardFour({
  title,
  imageUrl,
  icon,
  description,
  hasAnotherDescription = false,
  otherIcon,
  otherDescription,
}: CardFourProps) {
  return (
    <div className="flex flex-col gap-2 items-start w-fit">
      <div className="relative w-full h-[300px] aspect-square rounded-md overflow-clip">
        <Image
          src={imageUrl}
          alt="Alternative"
          fill
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium w-full">{title}</h2>
        <div className="flex flex-row gap-2 items-start">
          <span className="cluster-icon">{icon}</span>
          <p className="cluster-description">{description}</p>
        </div>
        {hasAnotherDescription && (
          <div className="flex gap-2">
            <span className="cluster-icon">
              {otherIcon}
              </span>
            <p className="cluster-description">{otherDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}
