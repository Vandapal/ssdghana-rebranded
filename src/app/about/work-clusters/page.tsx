import CardFour from "@/components/card-four/CardFour";
import { FaArrowsUpToLine, FaArrowTrendUp, FaHandHoldingDroplet, FaPeopleRobbery } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { PiBuildingsLight } from "react-icons/pi";

export default function WorkClustersPage() {
  const url =
    "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <main className="my-10 w-[95%] mx-auto">
      <h2 className="text-center text-3xl font-bold relative w-fit mb-5 mx-auto after:absolute after:w-20 after:h-1 after:bg-orange-500 after:bottom-0 after:left-0 after:right-0 after:top-10">
        Our Work Clusters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center items-start justify-center mt-10">
        <CardFour
          title="EXTENDING THE ECONOMIC AGENCY OF YOUNG PEOPLE"
          description="In its World employment and social trends outlook for 2020, the ILO emphasizes that poor working conditions manifest themselves in low incomes. The statistics look grim even at the global level. For instance in 2019 , the ILO reported that almost one in five, or 19 per cent, of all those employed did not earn enough to lift themselves and their families out of extreme or moderate poverty; a situation likely to significantly derail global poverty reduction targets by 2030."
          icon={<FaArrowTrendUp />}
          imageUrl={url}
        />
        <CardFour
          title="SUSTAINABLE AGRICULTURE AND CLIMATE JUSTICE"
          description="The International Fund for Agricultural Development (IFAD) estimated in 2019 that 70% of the Population in West and Central Africa depends on agriculture, primarily smallholder agriculture, for their livelihoods."
          icon={<FaHandHoldingDroplet />}
          imageUrl={url}
          hasAnotherDescription={true}
          otherIcon={<FaArrowsUpToLine />}
          otherDescription="Similarly, the ILO (2018) gathers that 28% of people employed in Ghana are into agricultural activities. Agriculture is thus a significant venture for many people including women and young people, and for the Northern parts of Ghana it represents one of the most realistic livelihood paths."
        />
        <CardFour
          title="EMPLOYMENT AND DECENT WORK"
          description="In its World employment and social trends outlook for 2020, the ILO emphasises that poor working conditions manifest themselves in low incomes. The statistics look grim even at the global level. For instance in 2019 , the ILO reported that almost one in five, or 19 per cent, of all those employed did not earn enough to lift themselves and their families out of extreme or moderate poverty; a situation likely to significantly derail global poverty reduction targets by 2030."
          icon={<FaPeopleRobbery />}
          imageUrl={url}
        />
        <CardFour
          title="FINANCIAL LITERACY AND FINANCIAL INCLUSION"
          description="The benefits from financial inclusion can be wide ranging. In similar vein, financial literacy can contribute to robust and sustainable decisions at the household and community levels. People with even the most basic knowledge of financial products and services are more likely to use the services of secured financial intermediaries and also make sensible savings and investments decisions"
          icon={<FiDollarSign />}
          imageUrl={url}
        />
        <CardFour
          title="URBANISATION AND LAND GOVERNANCE"
          description="Africa&apos;s population is already 40% urbanised, and projections indicate that the continent is likely to cross the ‘magical’ 50% urban threshold shortly after 2030 (United Nations, 2012; 2014). The profound nature of Africa’s urban transition calls for a collective rethinking of the governance and policy imperatives which assure prosperity and well-being for the majority of city residents. Ghana is reported to have crossed the urban divide in 2010 with about 51% of the population now living in urban areas."
          icon={<PiBuildingsLight />}
          imageUrl={url}
        />
      </div>
    </main>
  );
}
