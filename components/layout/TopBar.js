import { HiMenu } from 'react-icons/hi'
import PropTypes from 'prop-types'

const TopBar = ({ sidebarCollapsed, openSidebar }) => {
  return (
    <>
      <div id="topbar" className="bg-black flex flex-shrink-0 h-20 justify-end">
        <button
          onClick={openSidebar}
          className={sidebarCollapsed ? 'p-4' : 'hidden'}
        >
          <HiMenu className="w-10 h-10 text-white" />
        </button>
      </div>
    </>
  )
}

TopBar.propTypes = {
  openSidebar: PropTypes.func,
  sidebarCollapsed: PropTypes.bool
}

export default TopBar
