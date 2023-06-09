"use client";
import Image from "next/image";
import { Logo } from "../public/images";
import { useState } from "react";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex flex-row items-center justify-between px-10 pt-10 text-lg font-poppins text-custom_text_black md:flex-col md:justify-center">
      <a href="/">
        <Image
          className="object-cover w-2/3 lg:w-4/5 md:m-auto md:pb-6"
          src={Logo}
          width={220}
          alt="NavIcon"
        />
      </a>
      <nav>
        <section className="flex MOBILE-MENU md:hidden">
          <div
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className= {`${isNavOpen ? "showMenuNav" : "hideMenuNav"}`} >
            <div
              className="absolute top-0 right-0 px-10 pt-14"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="my-8 uppercase border-b border-gray-400">
                <a href="/book">Book</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a href="/menu">Menu</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a href="/contact">Contact</a>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden DESKTOP-MENU space-x-14 md:flex">
          <li>
            <a href="/book">Book</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
