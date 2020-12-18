import React from 'react'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import { screens } from './helpers/breakpoints'

const Oferta = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [toggleSidebar, setToggleSidebar] = useState(false)

  // En pantallas grandes, la sidebar se muestra por defecto, en pantallas chicas se muestra solo si el usuario lo pide
  useEffect(() => {
    const handleResize = () => {
      console.log('handleResize', window.innerWidth, screens.lg)
      const toggleByWidth = window.innerWidth >= screens.lg
      if (toggleByWidth) {
        setShowSidebar(true)
      } else {
        setShowSidebar(toggleSidebar)
      }
    }
    console.log('useEffect')
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-grow">
          <Sidebar show={showSidebar || toggleSidebar} toggleSidebar={() => setToggleSidebar(!toggleSidebar)} />
          <div className="flex flex-col flex-grow">
            <TopBar toggleSidebar={() => setToggleSidebar(!toggleSidebar)}/>
            <div id="content" className="container mx-auto bg-green-600 flex-grow">
              <h2> Content</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Oferta
