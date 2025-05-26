import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="mb-10">
      <div className="overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white m-4">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8 bg-gray-900">
            <h2 className="text-3xl text-white font-medium">
              Get In <span className="text-[#F7C35F]">Touch</span>
            </h2>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Have a specific inquiry or looking to explore new opportunities?
              Our experienced team is ready to engage with you.
            </p>

            <form>
              <div className="space-y-4 mt-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-[#F7C35F] outline-0"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-[#F7C35F] outline-0"
                />
                <input
                  type="number"
                  placeholder="Phone No."
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-[#F7C35F] outline-0"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-[#F7C35F] outline-0"
                />
                <textarea
                  placeholder="Write Message"
                  className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-[#F7C35F] outline-0"
                />
              </div>
              <button
                type="submit"
                className="mt-8 flex items-center justify-center text-[15px] font-medium w-full rounded-md px-4 py-2.5 tracking-wide text-gray-900 cursor-pointer bg-[#F7C35F] hover:bg-[#F7C35F]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </form>

            <ul className="mt-4 flex flex-wrap justify-center gap-4 lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2">
              <li className="flex items-center text-[#F7C35F]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  viewBox="0 0 479.058 479.058"
                >
                  <path d="..." />
                </svg>
                <a
                  href="mailto:probashiagro@gmail.com"
                  className="text-current text-sm ml-3"
                >
                  probashiagro@gmail.com
                </a>
              </li>
              <li className="flex items-center text-[#F7C35F]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  viewBox="0 0 482.6 482.6"
                >
                  <path d="..." />
                </svg>
                <a
                  href="tel:+8801972771401"
                  className="text-current text-sm ml-3"
                >
                  +8801972771401
                </a>
              </li>
            </ul>
          </div>
          <div className="z-10 relative h-full max-md:min-h-[350px]">
            <iframe
              className="left-0 top-0 h-full w-full"
              width="100%"
              height="600"
              allowFullScreen
              title="Map"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tower%2071,%20Matikata%20Road,%20Dhaka+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
