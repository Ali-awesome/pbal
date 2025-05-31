import Image from "next/image";
import Link from "next/link";
import React from "react";

const Overview = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-transparent rounded-xl p-6 gap-6 max-w-6xl mx-auto mt-3">
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src="/images/Fish.jpg"
          alt="Catching Fish"
          width={500}
          height={400}
          className="aspect-3/2 border-y-20 rounded-2xl border-[#F7C35F]"
        />

        {/*
        <video autoPlay muted loop className="w-full h-auto rounded-lg">
          <source src="/videos/creativity.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        */}
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 text-white">
        <p className="custom-bg">Our Introduction</p>
        <h2 className="text-3xl md:text-4xl font-bold font-[Livvic] text-[#F7C35F]">
          Fresh from Water to Table
        </h2>
        <p className="text-base md:text-lg custom-bg">
          Experience the true taste of the fresh water with our responsibly
          harvested, top-quality fish and seafood. Whether you're a retailer,
          restaurant, or distributor, we deliver freshness you can trust —
          directly from sustainable fisheries to your doorstep.
        </p>
        <ul className="list-disc list-inside text-white space-y-1 font-[Livvic]">
          <li>Delivering high-quality, farm-raised freshwater fish.</li>
          <li>Ensuring clean water practices for healthy growth.</li>
          <li>Supporting eco-friendly and sustainable fish farming.</li>
          <li>Partnering with local farmers for reliable supply chains.</li>
          <li>Maintaining freshness from pond to plate.</li>
          <li>Empowering communities through modern aquaculture.</li>
        </ul>
        <Link
          className="inline-block mt-4 px-6 py-3 bg-[#F7C35F] text-white rounded-lg shadow-md hover:bg-[#F7C35F] transition"
          href="\Gallery"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default Overview;
