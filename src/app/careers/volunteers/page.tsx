export default function VolunteersPage() {
  return (
    <main className="relative w-[80%] mx-auto my-10">
      {/* Background ellipse */}
      <div className="absolute" />
      {/* First text group */}
      <div className="flex flex-col gap-10">
        <h2 className="text-center text-3xl font-bold relative w-fit mx-auto after:absolute after:w-20 after:h-1 after:bg-orange-500 after:bottom-0 after:left-0 after:right-0 after:top-10">
          Volunteer Opportunity
        </h2>
        {/* Double paragraphs */}
        <div className="flex flex-col gap-10 text-slate-800">
          <p className="text-justify lg:text-left text-slate-700">
            Are you passionate about decentralization and working with young
            people to deepen their understanding of Ghana&apos;s Local
            Governance Act, 2016 {"(Act 936)"}? Are you interested in
            volunteering your time and skills to help young people in rural and
            urban areas appreciate the work, structures, and functions of
            Metropolitan, Municipal, and District Assemblies {"(MMDAs)"} in
            Ghana? If you answered YES to these questions, join us at SDD Ghana
            as we pilot an exciting volunteerism project funded by the STAR
            Ghana Foundation.
          </p>
          <p className="text-justify lg:text-left text-slate-700">
            Our project,
            <b>
              &apos;Social Accountability and Inclusion through Children
              Assemblies&apos{" "}
            </b>
            ; will work with Governance Coaches to increase awareness and
            engagement of young people with local governance structures.
          </p>
        </div>
        {/* Volunteer options */}
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="font-semibold capitalize">The ideal volunteer</h3>
          <ul className="flex flex-col">
            <li className="volunteer-list-item">
              Preferably resident in Tolon and surrounding communities
            </li>
            <li className="volunteer-list-item">
              Understands the local governance system of Ghana
            </li>
            <li className="volunteer-list-item">
              Communicates effectively in Dagbanli and English
            </li>
            <li className="volunteer-list-item">
              Has a proven record of effective engagement with young people
            </li>
            <li className="volunteer-list-item">
              Willing to sign onto SDD&apos;s Code of Ethics and Safeguarding
              Policy
            </li>
          </ul>
        </div>
      </div>
      {/* Separator text */}
      <div>
        <p className="text-orange-500 mx-auto text-base lg:w-[70%]">
          Serving and former Assembly members, Unit Committee members, and
          people with disabilities are encouraged to apply.
        </p>
        <div className="flex flex-col gap-2 my-4">
          <h3 className="font-semibold capitalize">
            What will volunteers get in return?
          </h3>
          <ul className="flex flex-col">
            <li className="volunteer-list-item">
              The opportunity to contribute to community and national
              development
            </li>
            <li className="volunteer-list-item">
              Recognition by SDD and partners as a change agent and local
              governance ambassador
            </li>
            <li className="volunteer-list-item">
              Networking opportunities with people from diverse backgrounds and
              skills
            </li>
          </ul>
          <strong className="lg:w-[70%] mx-auto mt-5 text-slate-500">
            If you are excited about this opportunity, please send an
            application letter and CV to the following email address:{" "}
            <span className="email">info@sddghana.org</span> or{" "}
            <span className="email">kpancharbiisom@gmail.com.</span>
          </strong>
        </div>
      </div>
      {/* About */}
      <div className="flex flex-col mt-5 mb-10 ">
        <h2 className="text-slate-700 text-3xl my-5 font-semibold relative w-fit after:absolute after:w-20 after:h-1 after:bg-orange-500 after:bottom-0 after:left-0 after:right-0 after:top-10">
          About SDD Ghana
        </h2>
        <p className="lg:w-[80%] text-slate-700">
          Savings and Development Dialogue, Ghana {"(SDD Ghana)"} envisions a
          world where diversity inspires actions to create opportunities and
          enhance inclusion for all people facing barriers. Visit us at
          <span className="email ml-1">www.sddghana.org</span>.
        </p>
      </div>
      {/* How to apply */}
      <div className="flex flex-col gap-5 items-center">
        <h3 className="text-2xl font-medium tacking-widest capitalize">
          How to apply?
        </h3>
        <p className="text-slate-800 inline-flex flex-col gap-3 items-center">
          <span>
            Please send an application letter and resume (not more than 4 pages)
            to;
          </span>
          <span className="email">Email: info@sddghana.org</span>
        </p>
        <p className="text-slate-700">
          Closing date for receipt of application: <b>August 2nd, 2024</b>
        </p>
        {/* Note */}
        <p className="text-slate-700">
          <b>Note:</b> Females are highly encouraged to apply.
        </p>
      </div>
    </main>
  );
}
