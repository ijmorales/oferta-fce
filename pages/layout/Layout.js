import { useState, useEffect } from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { screens } from '../helpers/breakpoints'

const Layout = ({ children }) => {
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
        <div className="flex flex-grow flex-1 overflow-y-auto">
          <Sidebar
            show={showSidebar || toggleSidebar}
            toggleSidebar={() => setToggleSidebar(!toggleSidebar)}
          />
          <div className="flex flex-col flex-grow overflow-y-auto">
            <TopBar
              toggleSidebar={() => setToggleSidebar(!toggleSidebar)}
              toggled={toggleSidebar}
            />
            <div id="content-wrapper" className="overflow-y-auto">
              <div
                id="content"
                className="container mx-auto pt-4 flex flex-col"
              >
                {children}
              </div>
            </div>
          </div>
        </div>
        <div
          id="footer-wrapper"
          className="flex justify-center bg-black text-gray-400 hover:text-white"
        >
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
