import { HiMenu } from 'react-icons/hi'
import PropTypes from 'prop-types'

const TopBar = ({ toggleSidebar, toggled }) => {
  return (
    <>
      <div id="topbar" className="bg-black flex flex-shrink-0 h-20 justify-start">
        <button onClick={toggleSidebar} className={toggled ? 'lg:hidden hidden p-4' : 'lg:hidden p-4'}>
          <HiMenu className="w-10 h-10 text-white"/>
        </button>
      </div>
    </>
  )
}

TopBar.propTypes = {
  toggleSidebar: PropTypes.func,
  toggled: PropTypes.bool
}

export default TopBar
