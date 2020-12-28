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
            ? 'bg-gray-700 w-screen h-full fixed text-white flex flex-col lg:w-44 lg:relative lg:h-auto justify-between'
            : 'hidden'
        }
      >
        <div id="close-button" className="lg:hidden flex justify-end h-20">
          <button onClick={toggleSidebar} className="p-4">
            <HiOutlineX className="w-10 h-10" />
          </button>
        </div>
        <ul className="flex flex-col lg:my-auto justify-end">
          <li className="group hover:bg-white hover:border-black text-center">
            <Link href="/oferta">
              <a className="group-hover:text-black flex align-middle p-4">
                <HiOutlineHome className="h-6 w-6 mr-4" />
                <p className="font-bold">Home</p>
              </a>
            </Link>
          </li>
          <li className="group hover:bg-white hover:border-black text-center">
            <Link href="/favoritos">
              <a
                className="group-hover:text-black flex align-middle p-4"
              >
                <HiOutlineStar className="h-6 w-6 mr-4" />
                <p className="font-bold truncate">Favoritos</p>
              </a>
            </Link>
          </li>
          <li className="group hover:bg-white hover:border-black text-center">
            <Link href="/about">
              <a className="group-hover:text-black flex align-middle p-4">
                <HiOutlineInformationCircle className="h-6 w-6 mr-4" />
                <p className="font-bold">Acerca de</p>
              </a>
            </Link>
          </li>
        </ul>
        <div id="wrapper" className="h-20 invisible">

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
