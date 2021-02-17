import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="text-war-blue flex flex-grow justify-center items-center lg:justify-end">
      <a
        href="https://github.com/ijmorales/oferta-fce"
        className="flex justify-center align-middle p-4"
        rel="noreferrer"
        target="_blank"
      >
        <span className="mr-4 flex items-center">
          <FaGithub className="h-3 w-3" />
        </span>
        <p>Desarrollado por Nacho Morales</p>
      </a>
    </div>
  );
};

export default Footer;
