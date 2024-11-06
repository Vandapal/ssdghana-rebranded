import Hero from "@/components/hero/Hero";
import Image from "next/image";
import ListItem from "./_components/ListItem";
import aboutData from "@/data/aboutData";
import CardThree from "@/components/card-three/CardThree";

export default function AboutPage() {
  return (
    <main>
      <Hero
        hasCta={false}
        center={true}
        subtitle="Let's tell you a bit about us."
        title="Who we are and what we're about"
        height="100dvh"
      />
      <section className="my-5">
        {/* About message */}
        <div className="flex flex-col gap-2 w-5/6 mx-auto">
          <h2 className="text-center text-3xl font-bold relative w-fit mx-auto after:absolute after:w-20 after:h-1 after:bg-orange-500 after:bottom-0 after:left-0 after:right-0 after:top-10">
            About Us
          </h2>
          <p className="w-full text-justify text-md leading-6 lg:w-[70%] mx-auto text-slate-600 lg:text-xl md:text-md lg:leading-8 mt-5">
            Savings and Development Dialogue{"(SDD)"} was established in 2015
            and incorporated in 2018 as a company limited by guarantee. The
            agency adopts innovative, inclusive and inspiring {"(3is)"}{" "}
            approaches to tackling development challenges.The agency adopts
            innovative, inclusive and inspiring {"(3is)"} approaches to tackling
            development challenges.
          </p>
        </div>
        {/* About details */}
        <div className="flex flex-col items-center justify-center gap-4 w-[80%] mx-auto mt-5 py-5 lg:flex-row">
          <div className="relative h-[400px] w-[400px] bg-gray-300 p-5 rounded-md">
            <Image
              src="/assets/logo.png"
              alt="SDD Ghana logo"
              fill
              className="object-cover"
            />
          </div>
          <ul className="p-0 m-o lg:w-[60%] flex flex-col gap-5">
            {aboutData.map((item) => (
              <ListItem key={item.id} content={item.content} />
            ))}
          </ul>
        </div>
        <div className="mt-10 relative">
          <div className="absolute w-full h-full bg-orange-200 bottom-0 -z-10 -skew-y-3 overflow-clip" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center lg:max-w-[85%] lg:mx-auto">
            <CardThree
              title="Our vision"
              description="Where diversity inspires actions to create opportunities and enhance inclusion for all people facing barriers."
            />
            <CardThree
              title="Our mission"
              description="Our mission is to be a catalyst for positive change, combining inclusive and sustainable development initiatives, research insights and policy influence to transform lives and communities."
            />
            <CardThree title="Our Core Values" hasListDescription={true} />
          </div>
        </div>
      </section>
    </main>
  );
}
