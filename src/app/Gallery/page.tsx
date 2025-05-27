"use client";
import React, { useState } from "react";

type Card = {
  img: string;
};

const Gallery: React.FC = () => {
  const cards: Card[] = [
    { img: "/images/fish1.jpg" },
    { img: "/images/fish2.jpg" },
    { img: "/images/fish3.jpeg" },
    { img: "/images/fish3.jpeg" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleExploreClick = (index: number) => {
    setActiveCardIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveCardIndex(null);
  };

  return (
    <div className="flex flex-col bg-[url(/images/style.png)] bg-cover bg-no-repeat pt-5 h-screen">
      <div className="custom-bg mb-5 my-auto">
        <h1 className="text-center text-5xl text-[#F7C35F]">Gallery</h1>
        <p className="text-center text-2xl">Explore our projects.</p>
      </div>

      <div className="flex justify-center gap-2 flex-wrap mb-5 my-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shadow-sm border-2 border-[#F7C35F] w-full max-w-64 rounded-lg overflow-hidden mb-2"
          >
            <div className="aspect-[3/2]">
              <img
                src={card.img}
                alt={`Card ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#F7C35F] text-xl font-semibold">Heading</h3>
              <button
                type="button"
                onClick={() => handleExploreClick(index)}
                className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-[#F7C35F] hover:bg-amber-800 cursor-pointer"
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-[#F7C35F] text-black px-6 py-3 mb-5 rounded-md mx-auto">
        Discover More
      </button>

      {/* Modal */}
      {isModalOpen && activeCardIndex !== null && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          />
          <div className="relative z-10 bg-white max-w-lg w-full rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-semibold text-[#F7C35F]">
                Card {activeCardIndex + 1}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-red-600 text-2xl"
              >
                &times;
              </button>
            </div>
            <img
              src={cards[activeCardIndex].img}
              alt="Modal Content"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-gray-600">
              This is some detailed information about the card content. You can
              dynamically render content based on the selected card index.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-[#F7C35F] text-white rounded hover:bg-amber-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
