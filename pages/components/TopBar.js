import { HiMenu } from 'react-icons/hi'
import PropTypes from 'prop-types'

const TopBar = ({ toggleSidebar }) => {
  return (
    <>
      <div id="topbar" className="bg-black flex h-20">
        <div>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <HiMenu className="w-24 h-24 text-white"/>
          </button>
        </div>
      </div>
    </>
  )
}

TopBar.propTypes = {
  toggleSidebar: PropTypes.func
}

export default TopBar
