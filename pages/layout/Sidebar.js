import {
  HiOutlineX,
  HiOutlineHome,
  HiOutlineStar,
  HiOutlineInformationCircle
} from 'react-icons/hi'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Sidebar = ({ show, toggleSidebar }) => {
  return (
    <>
      <nav
        id="sidebar"
        className={
          show
            ? 'bg-opacity-95 bg-gray-700 w-screen h-full fixed text-white flex flex-col lg:w-44 lg:relative lg:opacity-100 lg:h-auto'
            : 'hidden'
        }
      >
        <div id="close-button" className="lg:hidden flex justify-start h-20">
          <button onClick={toggleSidebar} className="p-4">
            <HiOutlineX className="w-10 h-10" />
          </button>
        </div>
        <ul className="flex flex-col my-auto">
          <li className="group hover:bg-white hover:border-black text-center">
            <Link href="/oferta">
              <a className="group-hover:text-black flex align-middle p-4">
                <HiOutlineHome className="h-6 w-6 mr-6" />
                <p className="font-bold">Home</p>
              </a>
            </Link>
          </li>
          <li className="group hover:bg-white hover:border-black text-center">
            <a
              href="#"
              className="group-hover:text-black flex align-middle p-4"
            >
              <HiOutlineStar className="h-6 w-6 mr-6" />
              <p className="font-bold truncate">Favoritos</p>
            </a>
          </li>
          <li className="group hover:bg-white hover:border-black text-center">
            <Link href="about">
              <a className="group-hover:text-black flex align-middle p-4">
                <HiOutlineInformationCircle className="h-6 w-6 mr-6" />
                <p className="font-bold">Acerca de</p>
              </a>
            </Link>
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
