"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <header className="shadow-md tracking-wide top-0 z-50 bg-[#334B35] sticky">
      <section className="py-2 bg-[#F7C35F] text-[#334B35] text-right px-10">
        <p className="text-sm">
          <span className="mx-3 font-semibold">Address:</span>Tower 71, House
          513/3, ECB Circle, South Matikata, Dhaka-1216, Bangladesh
          <span className="mx-3 font-semibold">Contact No:</span>+8801972771401
        </p>
      </section>

      <div className="px-4 py-3 w-full flex items-center min-h-[100px] max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between sm:px-10 gap-4 w-full mx-auto">
          <a href="#">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-[136px] hidden sm:block"
            />
            <img
              src="https://readymadeui.com/readymadeui-short.svg"
              alt="logo"
              className="w-9 block sm:hidden"
            />
          </a>

          <nav className="hidden lg:block  text-white font-thin items-center">
            <ul className="flex gap-x-10 items-center text-sm">
              <li>
                <Link
                  className="hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
                  href="\"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
                  href="\Gallery"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
                  href="\Blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
                  href="\Contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
                  href="\Team"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
                  href="\Services"
                >
                  Services
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="lg:hidden block"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle Mobile Menu"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-2/3 max-w-[300px] h-full bg-[#334B35] shadow-lg z-50 p-6"
          >
            <div className="mb-6">
              <img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                className="w-36"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 text-black"
              >
                ✕
              </button>
            </div>
            <ul className="space-y-4 text-white">
              {["Home", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li
                className="relative"
                onMouseEnter={() => setHoveredMenu("About")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1">
                  About
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                  </svg>
                </button>

                <AnimatePresence>
                  {hoveredMenu === "About" && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 min-w-[200px] shadow-lg bg-[#334B35] rounded-lg py-2 z-50"
                    >
                      {["Directors", "Staffs", "Companies"].map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setHoveredMenu("Projects")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1">
                  Projects
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                  </svg>
                </button>

                <AnimatePresence>
                  {hoveredMenu === "Projects" && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 min-w-[200px] shadow-lg bg-[#334B35] rounded-lg py-2 z-50"
                    >
                      {["On-going", "Completed", "Upcoming"].map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setHoveredMenu("Services")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1">
                  Services
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                  </svg>
                </button>

                <AnimatePresence>
                  {hoveredMenu === "Services" && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 min-w-[200px] shadow-lg bg-[#334B35] rounded-lg py-2 z-50"
                    >
                      {["Fisheries", "Hatcheries"].map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm hover:text-green-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
