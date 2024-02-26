import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="w-full mx-auto border-b-2 border-gray-300"></div>
      <br />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Logo column */}
        <div className="flex flex-col items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-16 h-16 rounded-full mb-4"
          />
          <div className="flex flex-col items-center">
            <a href="#" className="text-4xl text-gray-300 hover:text-white">
              Educación
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white">
              Productos
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white">
              Negocios
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white">
              Herramientas
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <a href="#" className="text-4xl text-gray-300 hover:text-white mb-2">
            Comunidad
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
            Blog
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
            Experiencias de extudiantes
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
            Plataforma
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
            Preguntas frecuentes
          </a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <a href="#" className="text-4xl text-gray-300 hover:text-white mb-2">
            Equipo
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
            Link 2
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
            Link 3
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
            Link 4
          </a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col">
          <a href="#" className="text-4xl text-gray-300 hover:text-white mb-2">
            Contacto
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
            Link 2
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
            Link 3
          </a>
          <a href="#" className="text-xl text-gray-300 hover:text-white mb-2">
            Link 4
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
