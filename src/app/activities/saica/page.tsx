import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { ImManWoman } from "react-icons/im";

export default function SaicaActivityPage() {
  return (
    <main className="flex sm:h-[70dvh] justify-center gap-10 mt-14 relative lg:h-[73.9dvh] ">
      {/* Side image */}
      <div className="hidden md:h-[400px] md:w-[400px] lg:h-[620px] lg:w-[620px] bg-orange-400 lg:flex items-center justify-center text-[200px] rounded-full aspect-square -ml-52 -mt-14">
        <ImManWoman className="text-slate-800 ml-20" />
      </div>
      {/* Content */}
      <div className="lg:w-[70%] w-full lg:items-start mx-10 mb-10 flex flex-col items-center lg:mx-auto ">
        <h1 className="text-5xl text-center lg:ml-6 font-semibold text-slate-800">SAICA</h1>
        {/* Texts */}
        <div className="flex flex-col gap-6 my-4 extra_lg:w-[80%]  w-full ">
          <p className="saica-activity-text">
            The “Promoting Community-Based Volunteerism for Active Citizenship”
            funded by the STAR-Ghana Foundation, aims to enhance local
            governance awareness and social accountability through
            volunteer-driven initiatives.
          </p>
          <p className="saica-activity-text">
            The{" "}
            <b>
              “Social Accountability and Inclusion through Children Assemblies”
            </b>{" "}
            project aims to empower youth by fostering an understanding of local
            governance. Implemented in the Savelugu Municipality, this
            initiative addresses the lack of awareness about the Local
            Governance Act 2016 {"(Act 936)"} and encourages youth participation
            in governance processes. Volunteers, termed Governance Coaches, will
            mentor and educate youth, conduct community outreach, and facilitate
            Children Assemblies. SDD Ghana emphasizes the sustainability of the
            project through capacity building, local partnerships, and advocacy
            efforts.
          </p>
        </div>
        <Button
          asChild
          className="bg-orange-400 shadow-md hover:bg-orange-300 mt-4 md:mt-0 !max-h-40 "
          size="lg"
        >
          <Link href="https://www.star-ghana.org/" target="_blank">
            Visit Star Ghana <FaArrowRight />
          </Link>
        </Button>
      </div>
      <div className="hidden absolute right-0 bottom-0 extra_lg:flex lg:h-[350px] aspect-square">
        <Image src="/assets/woman.svg" alt="Woman pointing to sky" fill />
      </div>
    </main>
  );
}
