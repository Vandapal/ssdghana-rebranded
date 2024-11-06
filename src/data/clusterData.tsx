import type { CardFourProps } from "@/components/card-four/CardFour";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
  FaHandHoldingDroplet,
  FaArrowsUpToLine,
  FaPeopleRobbery,
} from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { PiBuildingsLight } from "react-icons/pi";
const url =
  "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

interface Props extends CardFourProps {
    id: number
}

const clusterData: Props[] = [
  {
    id: 1,
    title: "EXTENDING THE ECONOMIC AGENCY OF YOUNG PEOPLE",
    imageUrl: url,
    description:
      "In its World employment and social trends outlook for 2020, the ILO emphasizes that poor working conditions manifest themselves in low incomes. The statistics look grim even at the global level. For instance in 2019 , the ILO reported that almost one in five, or 19 per cent, of all those employed did not earn enough to lift themselves and their families out of extreme or moderate poverty; a situation likely to significantly derail global poverty reduction targets by 2030.",
    icon: <FaArrowTrendUp />,
  },
  {
    id: 2,
    title: "SUSTAINABLE AGRICULTURE AND CLIMATE JUSTICE",
    imageUrl: url,
    description:
      "The International Fund for Agricultural Development (IFAD) estimated in 2019 that 70% of the Population in West and Central Africa depends on agriculture, primarily smallholder agriculture, for their livelihoods.",
    icon: <FaHandHoldingDroplet />,
    hasAnotherDescription: true,
    otherDescription:
      "Similarly, the ILO (2018) gathers that 28% of people employed in Ghana are into agricultural activities. Agriculture is thus a significant venture for many people including women and young people, and for the Northern parts of Ghana it represents one of the most realistic livelihood paths.",
    otherIcon: <FaArrowsUpToLine />,
  },
  {
    id: 3,
    title: "EMPLOYMENT AND DECENT WORK",
    imageUrl: url,
    description:
      "In its World employment and social trends outlook for 2020, the ILO emphasises that poor working conditions manifest themselves in low incomes. The statistics look grim even at the global level. For instance in 2019 , the ILO reported that almost one in five, or 19 per cent, of all those employed did not earn enough to lift themselves and their families out of extreme or moderate poverty; a situation likely to significantly derail global poverty reduction targets by 2030.",
    icon: <FaPeopleRobbery />,
  },
  {
    id: 4,
    title: 'FINANCIAL LITERACY AND FINANCIAL INCLUSION',
    imageUrl: url,
    description: 'The benefits from financial inclusion can be wide ranging. In similar vein, financial literacy can contribute to robust and sustainable decisions at the household and community levels. People with even the most basic knowledge of financial products and services are more likely to use the services of secured financial intermediaries and also make sensible savings and investments decisions',
    icon: <FiDollarSign />

  },{
    id: 5,
    title: 'URBANISATION AND LAND GOVERNANCE',
    imageUrl: url,
    description: 'Africa’s population is already 40% urbanised, and projections indicate that the continent is likely to cross the ‘magical’ 50% urban threshold shortly after 2030 (United Nations, 2012; 2014). The profound nature of Africa’s urban transition calls for a collective rethinking of the governance and policy imperatives which assure prosperity and well-being for the majority of city residents. Ghana is reported to have crossed the urban divide in 2010 with about 51% of the population now living in urban areas.',
    icon: <PiBuildingsLight />
  }
];

export default clusterData;
