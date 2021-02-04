import PropTypes from 'prop-types'
import { useState } from 'react'
import classnames from 'classnames'
import DropdownItem from './DropdownItem'

export default function Dropdown ({ items, itemsStyles, clickHandler, checkable, isChecked, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div id="dropdown">
      <div
        onClick={() => setOpen(!open)}
      >
        {children}
      </div>

      <ul
        className={classnames(
          'flex flex-col',
          'shadow-md bg-war-blue text-white absolute',
          open ? 'flex' : 'hidden'
        )}
      >
        {items.map((item, idx) => (
          <li
            className={classnames(
              'py-2 px-3 hover:bg-strong-gray cursor-pointer',
              itemsStyles
            )}
            key={ idx }
            onClick={() => clickHandler(item)}
          >
            <DropdownItem
              title={ item }
              checkable
              checked={isChecked !== undefined ? isChecked(item) : false}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

Dropdown.propTypes = {
  items: PropTypes.array
}
