import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <a 
        href="https://github.com/ijmorales/oferta-fce"
        className="flex justify-center align-middle p-4"
        rel="external"
        target="_blank"
      >
        <span className="mr-4 flex align-center">
          <FaGithub className="h-6 w-6"/>
        </span>
        <p>
          Desarrollado por Nacho Morales
        </p>
      </a>
    </>
  )
}

export default Footer
