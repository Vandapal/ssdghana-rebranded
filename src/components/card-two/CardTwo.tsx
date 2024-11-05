import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
  imageUrl: string | StaticImport;
  title: string;
  listItems: string[];
}

export default function CardTwo({ imageUrl, title, listItems }: Props) {
  return (
    <div className="shadow-lg rounded-sm p-6 w-[400px]">
      <div className="relative overflow-clip">
        <Image src={imageUrl as string} alt="An image" fill />
      </div>
      <div>
        <h3 className="font-bold text-2xl">{title}</h3>
        <ul className="flex flex-col gap-1 p-0 m-0 mt-2">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="list-disc ml-3 marker:text-orange-500 marker:font-3xl marker:leading-3"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
