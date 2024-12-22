import type { Metadata } from "next";
import Image from "next/image";
import ContactBanner from "../../../public/assets/contact-banner.svg";
import CardFive from "@/components/card-five/CardFive";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { TbMessages } from "react-icons/tb";
import { LiaMapMarkerAltSolid } from "react-icons/lia";

// Social images
import facebook from "../../../public/assets/socials/facebook.svg";
import twitter from "../../../public/assets/socials/twitter.svg";
import linkedin from "../../../public/assets/socials/linkedin.svg";
import instagram from "../../../public/assets/socials/instagram.svg";
import SocialIcon from "./_components/SocialIcon";
import MapEmbed from "./_components/MapEmbed";

export const metadata: Metadata = {
  title: "SDD Ghana - Contact",
  description: "Contact us",
};

export default function ContactPage() {
  return (
    <main>
      {/* Contact */}
      <div className="bg-orange-100 px-5 pt-7 w-full flex flex-col items-center lg:flex-row isolate lg:items-start lg:justify-start">
        <div className="flex flex-col items-center justify-center gap-10 mx-5 mt-20 lg:items-start lg:ml-24">
          <h1 className="text-5xl font-black text-center lg:text-6xl lg:text-left lg:w-[70%]">
            We are here for you, contact us anytime.
          </h1>
          <p className="text-xl text-center text-slate-500 md:w-[70%] lg:w-[70%] lg:text-xl lg:text-left">
            Have any questions about our services or just want to talk to us?
            Please reach out.
          </p>
        </div>
        <Image
          src={ContactBanner}
          alt="Woman receiving a telegram"
          className="md:w-1/2 md:aspect-square lg:w-[35%] lg:-z-10 lg:-translate-x-60 lg:scale-125 opacity-70"
        />
      </div>
      {/* Cards */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-flow-dense place-items-center w-full sm:w-[90%] sm:mx-auto sm:my-5 lg:w-5/6 lg:mx-auto lg:-translate-y-20">
        <CardFive
          icon={<LuPhone className="text-xl" />}
          header="Call Us"
          subHeader="Right from this website"
          hasDoubleContent={true}
          content1="+233(0)543822382"
          content2="+233(0)246339888"
        />
        {/* Email */}
        <CardFive
          icon={<CiMail className="text-2xl" />}
          header="Email Us"
          subHeader="From your email app"
          content1="info@sddghana.org"
        />
        {/* Message */}
        <CardFive
          icon={<TbMessages className="text-2xl" />}
          header="Chat With Us"
          subHeader="Chat with us on WhatsApp"
          content1="+233(0)543822382"
        />
        {/* Location */}
        <CardFive
          icon={<LiaMapMarkerAltSolid className="text-3xl" />}
          header="Location"
          subHeader="Locate Us"
          content1="Tamale, Ghana"
        />
      </div>
      {/* Message */}
      <p className="mt-8 text-xl border-2 border-slate-400 rounded-lg p-5 w-[70%] mx-auto text-center text-slate-600">
        We&apos;ll get back you as soon as possible. Our team is available fro
        Friday, 8:00 AM to 5:50PM
      </p>
      {/* Follow Us */}
      <section className="flex flex-col gap-5 justify-center items-center mt-5">
        <h1 className="text-3xl font-semibold">Follow Us</h1>
        {/* Social links */}
        <div className="flex gap-5 items-center justify-center">
          <SocialIcon imageUrl={facebook} />
          <SocialIcon imageUrl={twitter} />
          <SocialIcon imageUrl={linkedin} />
          <SocialIcon imageUrl={instagram} />
        </div>
        {/* Map */}
        <section className="w-5/6 mx-auto border border-slate-100 rounded-lg overflow-clip shadow-lg">
          <MapEmbed />
        </section>
      </section>
    </main>
  );
}
