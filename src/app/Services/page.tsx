import React from "react";
import { motion } from "framer-motion";
import FlexButtonGroup from "@/app/components/FlexButtonGroup";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

const Services: React.FC = () => {
  const buttonOptions = [
    {
      label: "Fisheries",
    },
    {
      label: "Hatcheries",
    },
  ];
  return (
    <section>
      {/* <FlexButtonGroup options={buttonOptions} /> */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-transparent rounded-xl p-6 gap-6 max-w-6xl mx-auto mt-3">
        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-1">
          <Image
            src="/images/Fish.jpg"
            alt="Catching Fish"
            width={500}
            height={400}
            className="aspect-3/2 border-y-20 rounded-2xl border-gray-900"
          />
          {/* 
          <video autoPlay muted loop className="w-full h-auto rounded-lg">
        <source src="/videos/creativity.mp4" type="video/mp4" />
        Your browser does not support the video tag.
          </video>
          */}
        </div>
        <div className="hidden lg:block h-[350px] w-px bg-gray-700 mx-8 order-3" />
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 text-white order-2 lg:order-2">
          <p className="custom-bg">Our Fishery</p>
          <h2 className="text-3xl md:text-4xl font-bold font-[Livvic] text-[#F7C35F]">
            Cultivating Excellence in Every Pond
          </h2>
          <p className="text-base md:text-lg custom-bg">
            Our fisheries are built on precision, care, and a deep respect for
            aquatic life. We combine traditional expertise with modern
            techniques to deliver healthy, high-quality fish year-round.
          </p>
          <ul className="list-none text-white space-y-1 font-[Livvic]">
            <li>
              <CheckCircleIcon style={{ color: "#f7c35f" }} fontSize="small" />{" "}
              Scientifically managed fish farming operations.
            </li>
            <li>
              <CheckCircleIcon style={{ color: "#f7c35f" }} fontSize="small" />{" "}
              Clean, monitored water systems for optimal health.
            </li>
            <li>
              <CheckCircleIcon style={{ color: "#f7c35f" }} fontSize="small" />{" "}
              Sustainable practices that protect ecosystems.
            </li>
            <li>
              <CheckCircleIcon style={{ color: "#f7c35f" }} fontSize="small" />{" "}
              Skilled staff ensuring daily monitoring and care.
            </li>
            <li>
              <CheckCircleIcon style={{ color: "#f7c35f" }} fontSize="small" />{" "}
              Regular testing to ensure top-grade harvests.
            </li>
          </ul>
          <Link
            className="inline-block mt-4 px-6 py-3 bg-[#F7C35F] text-gray-900 rounded-lg shadow-md hover:bg-[#F7C35F] transition"
            href="/Gallery"
          >
            Explore More
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between bg-transparent rounded-xl p-6 gap-6 max-w-6xl mx-auto mt-3">
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 text-white order-2 lg:order-1">
          <p className="custom-bg">Our Hatchery</p>
          <h2 className="text-3xl md:text-4xl font-bold font-[Livvic] text-[#F7C35F]">
            Nurturing the Next Generation
          </h2>
          <p className="text-base md:text-lg custom-bg">
            Our hatcheries use advanced techniques to ensure healthy, robust
            fingerlings. We focus on quality, sustainability, and innovation to
            support the future of aquaculture.
          </p>
          <ul className="list-none text-white space-y-1 font-[Livvic]">
            <li>
              <CheckCircleIcon style={{ color: "#f7c35f" }} fontSize="small" />{" "}
              State-of-the-art hatchery facilities.
            </li>
            <li>
              <CheckCircleIcon style={{ color: "#f7c35f" }} fontSize="small" />{" "}
              Rigorous health and quality checks.
            </li>
            <li>
              <CheckCircleIcon style={{ color: "#f7c35f" }} fontSize="small" />{" "}
              Sustainable breeding practices.
            </li>
            <li>
              <CheckCircleIcon style={{ color: "#f7c35f" }} fontSize="small" />{" "}
              Training and support for local farmers.
            </li>
            <li>
              <CheckCircleIcon style={{ color: "#f7c35f" }} fontSize="small" />{" "}
              Reliable supply of healthy fingerlings.
            </li>
          </ul>
          <Link
            className="inline-block mt-4 px-6 py-3 bg-[#F7C35F] text-gray-900 rounded-lg shadow-md hover:bg-[#F7C35F] transition"
            href="/Hatchery"
          >
            Learn More
          </Link>
        </div>
        <div className="hidden lg:block h-[350px] w-px bg-gray-700 mx-8 order-3" />
        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
          {/* <Image
            src="/images/Hatchery.jpg"
            alt="Hatchery"
            width={500}
            height={400}
            className="aspect-3/2 border-y-20 rounded-2xl border-gray-900"
          /> */}
          <video autoPlay muted loop className="w-full h-auto border-y-20 rounded-2xl border-gray-900">
            <source src="/images/Hatchery.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Services;
