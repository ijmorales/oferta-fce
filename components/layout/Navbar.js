import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { CSSTransition } from 'react-transition-group'

export default function Navbar () {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setShowMenu(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <nav className="flex flex-wrap justify-between items-center navbar-animated">
      <div id="logo" className="flex flex-shrink-0 p-3.5 sm:px-2">
        <a href="/oferta" className="flex">
          <img src="/logo3.svg" height="42" width="165" />
        </a>
      </div>
      <button className="flex md:hidden p-3.5" onClick={() => setShowMenu(!showMenu)}>
        <FaBars className="h-10 w-10 text-war-blue" />
      </button>
      <CSSTransition
        in={showMenu}
        timeout={150}
        unmountOnExit
        classNames="menu"
      >
        <ul className="w-full" id="mobile-menu">
          <li className="font-bold block group hover:bg-war-blue md:hover:bg-white">
            <a href="/about" className="group-hover:text-white md:group-hover:text-war-blue block p-3.5">Acerca de</a>
          </li>
          <li className="font-bold block group hover:bg-war-blue md:hover:bg-white">
            <a href="/feedback" className="group-hover:text-white md:group-hover:text-war-blue block p-3.5">Feedback</a>
          </li>
        </ul>
      </CSSTransition>
      <ul className="hidden md:flex" id="mobile-menu">
        <li className="font-bold block group hover:bg-war-blue md:hover:bg-white">
          <a href="/about" className="group-hover:text-white md:group-hover:text-war-blue block p-3.5">Acerca de</a>
        </li>
        <li className="font-bold block group hover:bg-war-blue md:hover:bg-white">
          <a href="/feedback" className="group-hover:text-white md:group-hover:text-war-blue block p-3.5">Feedback</a>
        </li>
      </ul>
    </nav>
  )
}