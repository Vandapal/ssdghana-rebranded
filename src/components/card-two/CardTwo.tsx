import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Url } from "next/dist/shared/lib/router/router";

interface Props {
  imageUrl: string | StaticImport;
  title: string;
  listItems: string[];
  showButton?: boolean;
  linkHref?: Url | string;
}

export default function CardTwo({
  imageUrl,
  title,
  listItems,
  showButton = false,
  linkHref = '/work-clusters',
}: Props) {
  return (
    <div className="shadow-lg rounded-md bg-white h-fit w-[400px] overflow-clip group hover:outline-1 hover:outline hover:outline-orange-500">
      <div className="relative overflow-clip h-[250px]">
        <Image src={imageUrl as string} alt="An image" fill className="object-cover transition-transform duration-500 group-hover:scale-105"/>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-2xl relative after:absolute after:top-0 after:bottom-0 after:w-10 after:h-10 after:-z-10 after:bg-orange-300  after:left-0  ">{title}</h3>
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
        {showButton && (
          <Button className="mt-3 text-md font-light" variant="outline" asChild>
            <Link
              href={linkHref}
              className="inline-flex items-center justify-center gap-2"
            >
              Learn More <BsBoxArrowUpRight />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
