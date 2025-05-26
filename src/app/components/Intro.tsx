import React from "react";

const Intro: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-[#354B33] h-screen">
      <img className="size-56" src="/images/style.png" alt="" />
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          What is SmartAgro?
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          SmartAgro is a community-driven platform that connects farmers,
          organic food producers, and eco-conscious consumers. We promote
          sustainable agriculture and help local producers grow their reach
          through smart digital tools.
        </p>
      </div>
    </section>
  );
};

export default Intro;
