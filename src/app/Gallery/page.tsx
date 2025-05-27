import React from "react";

interface Photos {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const Project: React.FC = async () => {
  const res = await fetch("https://picsum.photos/v2/list");
  const photos: Photos[] = await res.json();

  return (
    <section>
      <div className="flex flex-col bg-[url(/images/style.png)] bg-cover bg-no-repeat pt-5 h-screen">
        <div className="custom-bg mb-5 my-auto">
          <h1 className="text-center text-5xl text-[#F7C35F]">Gallery</h1>
          <p className="text-center text-2xl">Explore our projects.</p>
        </div>

        <div className="flex justify-center gap-2 flex-wrap mb-5 my-auto">
          {photos.slice(0, 10).map((photo) => (
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
    </section>
  );
};

export default Project;
