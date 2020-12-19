import { HiX } from 'react-icons/hi'
import PropTypes from 'prop-types'

const Sidebar = ({ show, toggleSidebar }) => {
  return (
    <>
      <nav id="sidebar" className={
        show
          ? 'bg-opacity-95 bg-gray-700 w-screen h-full fixed text-white flex flex-col lg:w-44 lg:relative lg:opacity-100 lg:h-auto'
          : 'hidden'
      }>
        <div id="close-button" className="lg:hidden flex justify-start h-20">
          <button onClick={toggleSidebar} className="p-4">
            <HiX className="w-10 h-10"/>
          </button>
        </div>
        <ul className="flex flex-col my-auto">
          <li className="group hover:bg-white hover:border-black p-4 text-center">
            <a href="#" className="group-hover:text-black">List Item 1</a>
          </li>
          <li className="group hover:bg-white hover:border-black p-4 text-center">
            <a href="#" className="group-hover:text-black">List Item 2</a>
          </li>
          <li className="group hover:bg-white hover:border-black p-4 text-center">
            <a href="#" className="group-hover:text-black">List Item 3</a>
          </li>
          <li className="group hover:bg-white hover:border-black p-4 text-center">
            <a href="#" className="group-hover:text-black">List Item 4</a>
          </li>
          <li className="group hover:bg-white hover:border-black p-4 text-center">
            <a href="#" className="group-hover:text-black">List Item 5</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

Sidebar.propTypes = {
  show: PropTypes.bool,
  toggleSidebar: PropTypes.func
}

export default Sidebar
