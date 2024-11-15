import Card from "@/components/card/Card";
import { TbTargetArrow } from "react-icons/tb";
import { PiEyeLight } from "react-icons/pi";
import { DiAtom } from "react-icons/di";
// import { IoArrowForwardCircleOutline } from "react-icons/io5";
import objectivesData from "@/data/objectivesData";
import GoalCard from "@/components/goal-card/GoalCard";
import CardTwo from "@/components/card-two/CardTwo";
import { clusterData, valuesData } from "@/components/card-two/cardData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowSmallUp } from "react-icons/hi2";
import Hero from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <main className="relative">
      <Button
        asChild
        className="fixed h-10 w-10 bg-orange-400 rounded-full shadow-xl right-0 bottom-0 m-1 z-50 flex items-center justify-center animate-bounce hover:bg-white hover:text-black hover:outline hover:outline-1 opacity-0 pointer-events-none"
      >
        <Link href="">
          <HiArrowSmallUp />
        </Link>
      </Button>
      {/* Hero */}
      <Hero />
      {/* Cards */}
      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-10 mb-4 px-3 md:px-4">
        <Card
          icon={<TbTargetArrow />}
          title="Our Mission"
          description="Our mission is to be a catalyst for positive change, combining inclusive and sustainable development initiatives, research insights and policy influence to transform lives and communities"
        />
        <Card
          icon={<PiEyeLight />}
          title="Our Vision"
          description="A world where diversity inspires actions to create opportunities and enhance inclusion for all people facing barriers."
        />
        <Card
          icon={<DiAtom />}
          title="Our Approach"
          description="Our approach is double-edge, incorporating a business case to social development and specific solutions directed at reducing vulnerability."
        />
      </section>
      {/* Sets us apart */}
      <section className="bg-orange-50 px-2 mt-20 pb-4 bg-opacity-5">
        <div className="flex flex-col gap-1">
          <p className="text-center text-slate-700 text-regular text-xl mb-6">
            What sets us apart?
          </p>
          <h2 className="uppercase font-bold text-4xl text-center mb-6">
            OUR GOALS AND OBJECTIVES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-start grid-flow-dense gap-4 mt-4 px-10">
            {objectivesData.map((data) => (
              <GoalCard key={data.id} id={data.id} text={data.text} />
            ))}
          </div>
        </div>
      </section>
      {/* Clusters? */}
      <section className="mt-6 mb-6 relative">
        {/* Bg */}
        <div className="absolute w-full h-full bg-orange-500 bottom-0 -z-10 -skew-y-6 overflow-clip">
          <div className="h-32 w-32 rounded-full bg-orange-200 absolute right-0 m-4" />
          <div className="h-[4200px] w-[4200px] rounded-full bg-orange-200 absolute left-0 right-0 m-4 mt-0 lg:mt-20"></div>
          <div className="h-32 w-32 rounded-full bg-orange-200 absolute left-0 m-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 lg:gap-0">
          <CardTwo
            imageUrl="/assets/back.jpg"
            title="Work Clusters"
            listItems={clusterData}
            showButton={true}
          />
          <svg
            width="119"
            height="21"
            viewBox="0 0 119 21"
            fill="none"
            className="hidden lg:block self-center"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M119 2.01161C119.006 1.45936 118.564 1.00648 118.012 1.00007L109.012 0.895596C108.46 0.889185 108.007 1.33167 108.001 1.88392C107.994 2.43617 108.437 2.88905 108.989 2.89546L116.988 2.98832L116.896 10.9878C116.889 11.54 117.332 11.9929 117.884 11.9993C118.436 12.0057 118.889 11.5632 118.895 11.011L119 2.01161ZM0.460908 2.84225C11.3204 9.79305 32.4046 17.966 54.9581 20.3291C77.5042 22.6913 101.758 19.2678 118.699 2.71527L117.301 1.28473C100.973 17.2378 77.4443 20.6741 55.1665 18.34C32.896 16.0066 12.1147 7.92682 1.53909 1.15775L0.460908 2.84225Z"
              fill="#fff"
            />
          </svg>
          <CardTwo
            imageUrl="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Core Values and Beliefs"
            listItems={valuesData}
          />
        </div>
      </section>
    </main>
  );
}
