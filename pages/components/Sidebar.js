import { HiX } from 'react-icons/hi'
import PropTypes from 'prop-types'

const Sidebar = ({ show, toggleSidebar }) => {
  return (
    <>
      <nav id="sidebar" className={show ? 'bg-opacity-95 bg-gray-700 w-screen h-screen fixed top-0 text-white lg:w-44 lg:flex lg:relative lg:h-auto' : 'hidden'}>
        <div id="close-button" className="lg:hidden">
          <button onClick={toggleSidebar}>
            <HiX className="w-8 h-8"/>
          </button>
        </div>
      </nav>
    </>
  )
}

Sidebar.propTypes = {
  show: PropTypes.bool,
  toggleSidebar: PropTypes.func
}

export default Sidebar
