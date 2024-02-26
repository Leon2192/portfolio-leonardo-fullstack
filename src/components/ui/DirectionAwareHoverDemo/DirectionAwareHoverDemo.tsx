"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../app/utils/cn";
import { DirectionAwareHover } from "./direction-aware-hover";
import React from "react";

const courses = [
  {
    image: "/projects/goproject.jpg",
    name: "Gopro Reseller",
    legend: "Landing page para reseller de la marca Gopro",
    description: "Tecnologias Next js, Next UI & Tailwind css.",
    link: "https://www.gopro.ar/",
  },
  {
    image: "/projects/boost.jpg",
    name: "Nahitan agencia",
    legend: "Desarrollo para agencia de Diseño Web",
    description: "Tecnologias React js, Next js & Tailwind CSS",
    link: "https://nahitan-web-dev.vercel.app/",
  },
  {
    image: "/projects/patagonia.jpg",
    name: "Patagonian llc",
    legend: "Web para marca internacional de pasteleria",
    description: "Tecnologias React js, CSS  & Tailwind css",
    link: "https://patagonianllc.vercel.app/",
  },
  {
    image: "/projects/ad.jpg",
    name: "Issue challenge",
    legend: "Challenge frontend para agencia de Marketing Digital",
    description: "Tecnologias React js, Typescript y Chakra UI",
    link: "https://broove.vercel.app/",
  },
  {
    image: "/projects/estudio.jpg",
    name: "RL-Arq - Estudio",
    legend: "Maquetado para estudio de arquitectura",
    description: "Tecnologias HTML, CSS & Javascript.",
    link: "https://r-l-arq.vercel.app/",
  },
  {
    image: "/projects/spotify.jpg",
    name: "Spotify clone UI",
    legend: "Clon de la interfaz de Spotify para desktop",
    description: "Tecnologias React js & MUI Design ",
    link: "https://spotify-ui-clone-six.vercel.app/",
  },
  {
    image:
      "data:image/png;base64,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",
    name: "Patagonia reversion",
    legend: "Re Diseño para website de Patagonia ",
    description: "Tecnologias React js, Next js & Tailwind CSS",
    link: "https://patagoniallc.vercel.app/",
  },
  {
    image: "/projects/status.png",
    name: "Status app",
    legend:
      "App que permite consultar el estado y velocidad de carga de sucursales de una empresa",
    description: "Tecnologias React js & CSS",
    link: "https://status-web-app.vercel.app/",
  },
  {
    image: "/projects/drag.jpg",
    name: "Drag & Drop App",
    legend: "Aplicacion drag & drop tasks",
    description: "Tecnologias React js DB Mongo.",
    link: "https://openjira-blue.vercel.app/",
  },

  {
    image: "/projects/formvalidate.png",
    name: "Validate form",
    legend: "Formulario controlado con React Hook Forms",
    description: "Tecnologias React js y React Hook Forms",
    link: "https://react-form-validate.vercel.app/",
  },
  {
    image: "/projects/meet.png",
    name: "Meet the beer",
    legend:
      "App que permite consultar el clima a una API y en base a eso calcula la cantidad necesaria para una reunion.",
    description: "Tecnologias React js, React Bootstrap & Firebase.",
    link: "https://meetups-app-six.vercel.app/",
  },
  {
    image: "/projects/netflix.jpg",
    name: "Netflix clone",
    legend: "Clon de app Netflix con autenticacion",
    description: "Tecnologias React js, Next js & Next Auth",
    link: "https://netflix-clone-tailwind-nextjs.vercel.app/",
  },
  {
    image: "/projects/openjira.jpg",
    name: "Drag & drop app UI",
    legend: "Interfaz con drag & drop ",
    description: "Tecnologias React js & Tailwind css.",
    link: "https://nextjs-drag-drop-en5g.vercel.app/",
  },
  {
    image: "/projects/poke.jpeg",
    name: "PokeChallenge",
    legend:
      "Consulta a api pokeapi, trae y muestra un pokemon en caso de encontrarlo.",
    description: "Tecnologias HTML, CSS & Javascript",
    link: "https://poke-challenge-arrieta-leonardo.vercel.app/",
  },
];

export function DirectionAwareHoverDemo() {
  return (
    <div className="h-full w-full relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-2">
      {courses.map((course) => (
        <a
          key={course.name}
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-center justify-center"
        >
          <DirectionAwareHover imageUrl={course.image}>
            <div className="flex flex-col justify-center items-start h-full">
              <p className="font-bold text-3xl">{course.name}</p>
              <p className="font-bold text-xl">{course.legend}</p>
              <p className="font-normal text-sm">{course.description}</p>
            </div>
          </DirectionAwareHover>
        </a>
      ))}
    </div>
  );
}
