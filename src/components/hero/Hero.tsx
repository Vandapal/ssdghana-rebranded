import Link from "next/link";
import { Button } from "../ui/button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

interface HeroProps {
  title?: string;
  subtitle?: string;
  hasCta?: boolean;
  center?: boolean;
  height?: string;
}

export default function Hero({
  title = "Welcome to the SDD Ghana Website",
  subtitle = `SDD strives to be the go-to development agency in an inclusive development in Ghana.`,
  hasCta = true,
  center = false,
  // height = "75dvh",
}: HeroProps) {
  return (
    <section
      className={`bg-[url('/assets/back.jpg')] bg-cover bg-center bg-opacity-[.5] h-[75dvh] flex flex-col gap-4 ${
        center ? "items-center justify-center" : "items-start justify-end"
      } p-4 relative isolate`}
    >
      {/* Overlay div */}
      <div className="-z-10 bg-sky-500 opacity-25 absolute inset-0"></div>
      <h1 className="text-5xl font-bold text-white drop-shadow-lg text-center md:text-left capitalize">
        {/* Welcome to the SDD Ghana Website */}
        {title}
      </h1>
      <p className="text-xl font-regular text-white drop-shadow-lg text-center md:text-left">
        {/* SDD strives to be the go-to development agency in an inclusive
        development in Ghana. */}
        {subtitle}
      </p>
      {hasCta && (
        <div className="flex items-center flex-col w-full gap-4 mt-3 md:flex-row md:items-start">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="text-xl !py-6 font-light w-fit shadow-lg"
          >
            <Link href="/about">About Us</Link>
          </Button>
          <Button
            asChild
            variant="link"
            size="lg"
            className="text-xl !py-6 font-light w-fit text-white transition-all hover:outline hover:outline-1 group/volunteers"
          >
            <Link
              href="/volunteers"
              className="inline-flex items-center justify-between"
            >
              Volunteers{" "}
              <IoArrowForwardCircleOutline className="text-3xl transition-transform group-hover/volunteers:translate-x-2" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}
