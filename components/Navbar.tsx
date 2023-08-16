"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [showHamburger, setshowHamburger] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <FontAwesomeIcon icon={faRocket} className=" text-orange-be" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-orange-be dark:text-white">
            Aerosoft
          </span>
        </Link>

        <div className="flex md:order-2">
          <a
            href="https://wa.link/45k38j"
            target="_blank"
            type="button"
            className="mr-3 flex items-center gap-3 rounded-xl bg-orange-be px-5 py-4 text-center text-sm font-medium text-white duration-300 ease-in-out hover:bg-lightorange-be focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
          >
            <div>Contact Us</div>
            <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
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
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
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
        <div
          className={`w-full  ${showHamburger ? "block md:hidden" : "hidden"}`}
        >
          <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800">
            <li>
              <Link
                href="/"
                className={`my-1 block rounded bg-gray-400 py-2 pl-3 pr-4 text-white hover:bg-blue-800 ${
                  pathname === "/" && "bg-gray-500"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className={`my-1 block rounded bg-gray-400 py-2 pl-3 pr-4 text-white hover:bg-blue-800 ${
                  pathname === "/profile" && "bg-gray-500"
                }`}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className={`my-1 block rounded bg-gray-400 py-2 pl-3 pr-4 text-white hover:bg-blue-800 ${
                  pathname === "/profile" && "bg-gray-500"
                }`}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/teams"
                className={`my-1 block rounded bg-gray-400 py-2 pl-3 pr-4 text-white hover:bg-blue-800 ${
                  pathname === "/profile" && "bg-gray-500"
                }`}
              >
                Our Teams
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
