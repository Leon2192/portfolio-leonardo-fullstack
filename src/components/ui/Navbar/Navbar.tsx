"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../../../app/utils/cn";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function NavbarDemo() {
  return (
    <div className="relative w-full top-2 hidden md:block flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-black",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Soft skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Resolución de problemas</HoveredLink>
            <HoveredLink href="/">Habilidades de comunicacion</HoveredLink>
            <HoveredLink href="/">Trabajo en equipo</HoveredLink>
            <HoveredLink href="/">Gestión del tiempo</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Stack frecuente">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Next js"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Para desarrollar interfaces de usuario atractivas de manera rapida y efectiva, "
            />
            <ProductItem
              title="Tailwind css"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Como  marco de trabajo de utilidad CSS para interfaces de usuario personalizadas y modernas."
            />
            <ProductItem
              title="Typescript"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Para mejorar la escalabilidad y mantenibilidad del código."
            />
            <ProductItem
              title="Node js"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Como entorno ejecución de JavaScript del lado del servidor. "
            />
            <ProductItem
              title="Express js"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Como marco de trabajo minimalista y flexible para Node.js."
            />
            <ProductItem
              title="Bases de datos"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Relacionales como SQL y no relacionales como Firebase, Supabase Mongo."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contacto">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://www.linkedin.com/in/leonardo-manuel-arrieta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <div className="flex items-center">
                <FaLinkedin className="mr-2 w-4 h-4" color="#0e76a8" />
                <span>Linkedin</span>
              </div>
            </HoveredLink>
            <HoveredLink href="https://github.com/Leon2192">
              <div className="flex items-center">
                <FaGithub className="mr-2 w-4 h-4" />
                <span>Github</span>
              </div>
            </HoveredLink>
            <HoveredLink href="mailto:leo.arrieta93@hotmail.com">
              <div className="flex items-center">
                <BiLogoGmail className="mr-2 w-4 h-4" color="#db4a39" />
                <span>Email</span>
              </div>
            </HoveredLink>
            <HoveredLink href="https://api.whatsapp.com/send?phone=1127682286">
              <div className="flex items-center">
                <FaWhatsapp className="mr-2 w-4 h-4" color="#25D366" />
                <span>Whatsapp</span>
              </div>
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
