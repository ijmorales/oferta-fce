import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'

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
    <nav className="flex flex-wrap justify-between items-center">
      <div id="logo" className="flex flex-shrink-0 p-3.5">
        <Image src="/logo3.svg" height="42" width="165" />
      </div>
      <button className="flex md:hidden p-3.5" onClick={() => setShowMenu(!showMenu)}>
        <FaBars className="h-10 w-10 text-war-blue" />
      </button>
      <ul className={showMenu ? 'md:flex block w-full mt-2' : 'md:flex hidden'}>
        <li className="font-bold text-xl block group hover:bg-war-blue md:hover:bg-white">
          <a href="/about" className="group-hover:text-white md:group-hover:text-war-blue block p-3.5">Acerca de</a>
        </li>
        <li className="font-bold text-xl block group hover:bg-war-blue md:hover:bg-white">
          <a href="/feedback" className="group-hover:text-white md:group-hover:text-war-blue block p-3.5">Feedback</a>
        </li>
      </ul>
    </nav>
  )
}