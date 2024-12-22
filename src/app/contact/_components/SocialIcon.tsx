import Image from "next/image";

interface SocialIconProps {
  imageUrl: string;
}

export default function SocialIcon({ imageUrl }: SocialIconProps) {
  return (
    <div className="social-icon group/social-icon hover:bg-slate-100 cursor-pointer">
      <Image src={imageUrl} alt={`${imageUrl} icon`} className="transition-transform group-hover/social-icon:scale-110"></Image>
    </div>
  );
}
