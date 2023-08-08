import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-16"> {/* Adjust the top and bottom padding */}
      <div className="sm:py-10 flex md:flex-row justify-between items-center space-x-8"> {/* Adjust the top padding */}
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-Cabin text-xl text-[#3C312A] dark:text-[#FFFCF2]">
              {userData.name}
            </h1>
            <p className="text-base font-light text-[#3C312A] dark:text-[#FFFCF2]">
              {userData.designation}
            </p>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block relative">
          {/* About */}
          <Link
            href="/about"
            className={`text-base  ${router.asPath === "/about"
              ? "text-[#3C312A] font-bold dark:text-[#FFFCF2]"
              : "text-[#3C312A] dark:text-[#FFFCF2] font-normal "
              }`}
          >
            About
            {router.asPath === "/about" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </Link>

          {/* Projects */}
          <div className="relative inline-block">
            <Link
              href="/projects"
              className={`text-base ${router.asPath === "/projects" ? "text-[#3C312A] font-bold dark:text-[#FFFCF2]" : "text-[#3C312A] dark:text-[#FFFCF2] font-normal "}`}
            >
              Projects
              <button onClick={toggleDropdown} className="ml-1 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </button>
            </Link>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-1 p-2 bg-white border border-gray-300 shadow-lg rounded-md">
                {/* Dropdown content */}
                <Link href="/projects#project1" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    EBO
                  </span>
                </Link>
                <Link href="/projects#project2" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    Mars Rover
                  </span>
                </Link>
                <Link href="/projects#project3" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    Dabloon Token
                  </span>
                </Link>
                <Link href="/projects#project4" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    Discord Bot
                  </span>
                </Link>
                <Link href="/projects#project5" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    HMS
                  </span>
                </Link>
                <Link href="/projects#project6" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    Mechanical Flower
                  </span>
                </Link>
                <Link href="https://my-dig-port-game.vercel.app" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    Play My Game!
                  </span>
                </Link>
                {/* Add more project links here */}
                
              </div>
            )}
          </div>

          {/* Blog */}
          <Link
            href="/blog"
            className={`text-base  ${router.asPath === "/blog"
              ? "text-gray-800 font-bold dark:text-[#FFFCF2]"
              : "text-[#3C312A] dark:text-[#FFFCF2] font-normal "
              }`}
          >
            Blog
          </Link>

          {/* Experience */}
          <Link
            href="/experience"
            className={`text-base  ${router.asPath === "/experience"
              ? "text-gray-800 font-bold dark:text-[#FFFCF2]"
              : "text-[#3C312A] dark:text-[#FFFCF2] font-normal "
              }`}
          >
            Experience
          </Link>

          {/* Experience */}
          <Link
            href="/myapi"
            className={`text-base  ${router.asPath === "/myapi"
              ? "text-gray-800 font-bold dark:text-[#FFFCF2]"
              : "text-[#3C312A] dark:text-[#FFFCF2] font-normal "
              }`}
          >
            API
          </Link>


          {/* Contact */}
          <Link
            href="/contact"
            className={`text-base  ${router.asPath === "/contact"
              ? "text-[#3C312A] font-bold dark:text-[#FFFCF2]"
              : "text-[#3C312A] dark:text-[#FFFCF2] font-normal "
              }`}
          >
            Contact
            {router.asPath === "/contact" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </Link>
        </div>
        <div className="space-x-4 flex flex-row items-center">
          <a href={userData.socialLinks.github}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16" // Updated viewBox to "0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 .5a7.5 7.5 0 00-2.384 14.625c.377.07.515-.163.515-.363 0-.18-.007-.658-.01-1.293-2.097.456-2.536-1.018-2.536-1.018a2.002 2.002 0 00-.832-1.104c-.678-.46.052-.451.052-.451a1.588 1.588 0 011.158.78 1.605 1.605 0 002.191.626 1.61 1.61 0 01.478-1.007c-1.674-.19-3.433-.837-3.433-3.724a2.92 2.92 0 01.78-2.033 2.709 2.709 0 01.071-2.007s.635-.204 2.083.777a7.389 7.389 0 014.015 0c1.448-.981 2.081-.777 2.081-.777a2.707 2.707 0 01.071 2.007 2.92 2.92 0 01.78 2.033c0 2.893-1.763 3.532-3.443 3.724a1.801 1.801 0 01.518 1.401c0 1.015-.01 1.833-.01 2.084 0 .2.134.434.518.361A7.5 7.5 0 008 0h.002zm-1.291 11.646c-.02.006-.032.016-.038.031a.168.168 0 000 .1v1.56c-.232.051-.471.075-.71.077-.239-.002-.478-.026-.71-.077V12.77c0-.033-.014-.062-.04-.083a.135.135 0 00-.1 0c-.048.03-.096.048-.14.052a2.55 2.55 0 01-1.174 0c-.044-.004-.092-.022-.14-.052a.13.13 0 00-.1 0c-.025.021-.04.05-.04.083v1.466c-.24.05-.48.075-.72.077-.237-.002-.474-.027-.704-.077V11.78c0-.034-.014-.064-.04-.084a.134.134 0 00-.1 0 1.064 1.064 0 01-.148.01 2.61 2.61 0 01-1.427-.414.743.743 0 01-.277-.234c-.316-.392-.38-.862-.38-1.185v-.001c0-.67.417-1.42 1.03-1.644-.02-.044-.033-.092-.038-.142a.129.129 0 00-.064-.1 6.08 6.08 0 011.62-.205c.552.006 1.23.074 1.912.26.156-.044.325-.066.5-.066.173 0 .343.022.5.066a7.635 7.635 0 011.912-.26c.66-.012 1.314.09 1.902.265a.128.128 0 00.068.1c.004.05.017.098.038.142.613.225 1.03.975 1.03 1.644v.001c0 .323-.064.793-.38 1.185a.742.742 0 01-.276.234 2.61 2.61 0 01-1.427.414 1.09 1.09 0 01-.148-.01c-.027.02-.04.05-.04.084v1.56c-.232.051-.47.075-.71.077-.237-.002-.474-.026-.704-.077V11.78c0-.034-.014-.064-.04-.084a.132.132 0 00-.1 0c-.048.03-.096.048-.14.052a1.785 1.785 0 01-1.174 0c-.045-.004-.092-.022-.14-.052z"
              />
            </svg>

          </a>

          <a
            href={userData.socialLinks.linkedin}
            className="text-base font-normal text-[#3C312A] dark:text-[#FFFCF2]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
        {/* Mobile menu - Hamburger icon */}
        <button
          className="md:hidden block text-[#3C312A] dark:text-[#FFFCF2] text-base font-normal outline-none transition-colors duration-200 hover:text-[#0070F3] dark:hover:text-[#0070F3] focus:text-[#0070F3] focus:outline-none"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>
      {/* Mobile menu content */}
      {showMobileMenu && (
        <div className="md:hidden mt-2 space-y-2 p-2 bg-white dark:bg-[#0D1117] shadow-md rounded-md">
          <Link href="/" passHref>
            <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
              About
            </span>
          </Link>
          {/* Projects Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={toggleProjectsDropdown}
              className="text-base text-[#3C312A] dark:text-[#FFFCF2] font-normal outline-none transition-colors duration-200 hover:text-[#0070F3] dark:hover:text-[#0070F3] focus:text-[#0070F3] focus:outline-none px-2 py-1" // Adjusted padding here
            >
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </button>
            {isProjectsDropdownOpen && (
              <div className="absolute z-10 mt-2 p-2 bg-white dark:bg-[#0D1117] bg-opacity-90 shadow-md rounded-md right-0">
                {/* Dropdown content */}
                <Link href="/projects#project1" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    EBO
                  </span>
                </Link>
                <Link href="/projects#project2" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    Mars Rover
                  </span>
                </Link>
                <Link href="/projects#project3" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    Dabloon Token
                  </span>
                </Link>
                <Link href="/projects#project4" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    Discord Bot
                  </span>
                </Link>
                <Link href="/projects#project5" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    HMS
                  </span>
                </Link>
                <Link href="/projects#project6" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    Mechanical Flower
                  </span>
                </Link>
                <Link href="https://my-dig-port-game.vercel.app" passHref>
                  <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
                    Play My Game!
                  </span>
                </Link>
                {/* Add more project links if needed */}
              </div>
              
            )}
          </div>
          <Link href="/experience" passHref>
            <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
              Experience
            </span>
          </Link>

          <Link href="/myapi" passHref>
            <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
              API
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="block px-2 py-1 text-base font-normal text-[#3C312A] dark:text-[#FFFCF2] hover:text-[#0070F3] dark:hover:text-[#0070F3]">
              Contact
            </span>
          </Link>
          {/* Add other mobile menu links as needed */}
        </div>
      )}
    </div>
  );
}
