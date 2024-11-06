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
  hasAnotherDescription,
  otherIcon,
  otherDescription,
}: CardFourProps) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image src={imageUrl} alt="Alternative" fill />
      </div>
      <div className="flex">
        <h2 className="text-2xl font-light">{title}</h2>
        <div className="flex gap-2">
          {icon}
          <p>{description}</p>
        </div>
        {hasAnotherDescription && (
          <div className="flex gap-2">
            {otherIcon}
            <p>{otherDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}
