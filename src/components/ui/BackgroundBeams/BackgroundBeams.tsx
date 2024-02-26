"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-8 mb-4">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          ¿Quieres contactar conmigo?
        </h1>
        <p></p>
        <p className="text-neutral-500 font-bold max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          Puedes mandarme un mensaje y conversemos 👋🏻
        </p>
        <div className="flex justify-center items-center w-full relative z-10 mt-4">
          <a
            href="mailto:leo.arrieta93@hotmail.com"
            target="blank"
            className="mr-12"
          >
            <BiLogoGmail size={"2.5em"} color="#db4a39" />
          </a>
          <a
            href="https://github.com/Leon2192"
            target="blank"
            className="mr-12"
          >
            <FaGithub size={"2.5em"} color="fff" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=1127682286"
            target="blank"
            className="mr-12"
          >
            <FaWhatsapp size={"2.5em"} color="#25D366" />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-manuel-arrieta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="blank"
          >
            <FaLinkedin size={"2.5em"} color="#0e76a8" />
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
