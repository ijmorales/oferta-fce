import PropTypes from 'prop-types'
import Footer from './Footer'
import Navbar from './Navbar'
export default function Layout ({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <header className="w-full shadow-lg bg-white flex">
        <div className=" flex-grow bg-white container mx-auto" id="navbar-wrapper">
          <Navbar />
        </div>
      </header>
      <div className="container mx-auto flex flex-col justify-center px-2 w-full">
        {children}
      </div>
      <div className="text-xs flex container mx-auto w-full mt-auto">
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object
}
