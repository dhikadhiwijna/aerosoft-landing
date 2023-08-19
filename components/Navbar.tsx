"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { image } from "@/public";

export default function Navbar() {
  const [showHamburger, setshowHamburger] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white-be dark:border-gray-600 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link
            href="/"
            className="flex items-center gap-3 font-bold uppercase"
          >
            <Image
              src={image.aerosoftLogo}
              alt={"logo"}
              width={150}
              height={150}
            />
          </Link>

          <div className="flex items-center md:order-2">
            <a
              href="https://wa.link/ppdpcu"
              target="_blank"
              type="button"
              className="mr-3 flex items-center gap-3 rounded-xl bg-orange-be px-5 py-4 text-center text-sm font-bold uppercase text-white duration-300 ease-in-out hover:bg-lightorange-be focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
            >
              <div>Contact Us</div>
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white"
                size="xl"
              />
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              onClick={() => setshowHamburger(!showHamburger)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
            <ul className="mt-4 flex flex-col border-gray-100 p-4 font-bold uppercase dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
              <Link className="text-gray-800 dark:text-white" href="/profile">
                Profile
              </Link>
              <Link className="text-gray-800 dark:text-white" href="/services">
                Service
              </Link>
              <Link className="text-gray-800 dark:text-white" href="/teams">
                Our Team
              </Link>
            </ul>
          </div>
        </div>
        <div
          className={`w-full ${
            showHamburger ? "opacity-100" : "opacity-0"
          } item-center absolute left-0 top-[3.4em] z-10 mt-8 flex items-start rounded-b-3xl bg-lightgray-be transition-all duration-300 ease-in-out md:hidden`}
        >
          <ul className="flex flex-1 flex-col text-center font-medium dark:border-gray-700 dark:bg-gray-800 ">
            <li>
              <Link
                href={`${showHamburger && "/"}`}
                className={`my-1 block rounded-3xl py-5 transition-all duration-300 ease-in-out hover:bg-orange-be hover:text-white ${
                  pathname === "/" && "text-orange-be"
                } ${showHamburger ? "cursor-pointer" : "cursor-default"}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={`${showHamburger && "/profile"}`}
                className={`my-1 block rounded-3xl py-5 transition-all duration-300 ease-in-out hover:bg-orange-be hover:text-white ${
                  pathname === "/profile" && "text-orange-be"
                } ${showHamburger ? "cursor-pointer" : "cursor-default"}`}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href={`${showHamburger && "/services"}`}
                className={`my-1 block rounded-3xl py-5 transition-all duration-300 ease-in-out hover:bg-orange-be hover:text-white ${
                  pathname === "/services" && "text-orange-be"
                } ${showHamburger ? "cursor-pointer" : "cursor-default"}`}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href={`${showHamburger && "/teams"}`}
                className={`my-1 block rounded-3xl py-5 transition-all duration-300 ease-in-out hover:bg-orange-be hover:text-white ${
                  pathname === "/teams" && "text-orange-be"
                } ${showHamburger ? "cursor-pointer" : "cursor-default"}`}
              >
                Our Teams
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
