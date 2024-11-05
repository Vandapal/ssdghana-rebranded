import Card from "@/components/card/Card";
import { TbTargetArrow } from "react-icons/tb";
import { PiEyeLight } from "react-icons/pi";
import { DiAtom } from "react-icons/di";
import objectivesData from "@/data/objectivesData";
import GoalCard from "@/components/goal-card/GoalCard";
import CardTwo from "@/components/card-two/CardTwo";
import { clusterData, valuesData } from "@/components/card-two/cardData";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-sky-500 to-green-400 h-[60dvh] flex flex-col gap-4 items-start justify-end p-4">
        <h1 className="text-5xl font-bold text-white text-center md:text-left">
          Welcome to the SDD Ghana Website
        </h1>
        <p className="text-xl font-regular text-white text-center md:text-left">
          SDD strives to be the go-to development agency in an inclusive
          development in Ghana.
        </p>
      </section>
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
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 w-5/6 mx-auto mt-6 mb-6">
        <CardTwo imageUrl='https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title="Work Cluster" listItems={clusterData} />
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
            fill="#DE713D"
          />
        </svg>
        <CardTwo imageUrl='https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title="Core Values and Beliefs" listItems={valuesData} />
      </section>
    </main>
  );
}
