import React from "react";
import GalleryNav from "@/app/components/GalleryNav";
import Project from "@/app/ProjectLocation/page";

interface Photos {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const Gallery: React.FC = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const photos: Photos[] = await res.json();

  return (
    <section>
      <div className="flex flex-col bg-[url(/images/style.png)] bg-cover bg-no-repeat">
        <div className="custom-bg mb-5 my-auto relative w-full">
          <img
            className="h-96 object-cover rounded-lg w-7xl mx-auto"
            src="/images/fish1.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col flex-row-sm items-center justify-center">
            <h1 className="text-center text-5xl text-[#F7C35F]">PROJECTS</h1>
            <p className="text-center text-2xl">Explore our projects.</p>
          </div>
        </div>
        <div className="w-2xl mx-auto">
          <GalleryNav />
        </div>
        {/* <nav className="w-full mb-4 text-white ">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            <li className="bg-gray-900 p-2">
              <Link href="">Completed</Link>
            </li>
            <li className="bg-gray-900 p-2">
              <Link href="">Ongoing</Link>
            </li>
            <li className="bg-gray-900 p-2">
              <Link href="">Upcoming</Link>
            </li>
          </ul>
        </nav> */}
        <div className="flex justify-center gap-2 flex-wrap mb-5 my-auto">
          {photos.slice(0, 3).map((photo) => (
            <div
              key={photo.id}
              className="shadow-sm border-2 border-[#F7C35F] w-full max-w-64 rounded-lg overflow-hidden mb-2"
            >
              <div className="aspect-[3/2]">
                <img
                  src={photo.download_url}
                  alt={`Card ${photo.id}`}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#F7C35F] text-xl font-semibold">
                  {photo.author}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Project />
    </section>
  );
};

export default Gallery;
