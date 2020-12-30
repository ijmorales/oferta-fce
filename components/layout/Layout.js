import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import Content from './Content'
import { screens } from '../../helpers/breakpoints'

export default function Layout ({ children }) {
  const [dimensions, setDimensions] = useState({})
  const [sidebarToggled, setSidebarToggled] = useState(false)
  const sidebarCollapsed = dimensions.width < screens.lg

  useEffect(() => {
    function handleResize () {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-grow flex-1 overflow-y-auto">
          <Sidebar
            sidebarShow={
              sidebarCollapsed === false ||
              (sidebarCollapsed && sidebarToggled === true)
            }
            closeSidebar={() => setSidebarToggled(false)}
          />
          <div className="flex flex-col flex-grow overflow-y-auto">
            <TopBar
              sidebarCollapsed={sidebarCollapsed}
              openSidebar={() => setSidebarToggled(true)}
            />
            <Content
              show={!sidebarCollapsed || (sidebarCollapsed && !sidebarToggled)}
            >
              {children}
            </Content>
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

Layout.propTypes = {
  children: PropTypes.object
}
