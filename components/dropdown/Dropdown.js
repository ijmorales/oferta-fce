import { Menu, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import classnames from 'classnames'
import { FaChevronCircleDown } from 'react-icons/fa'
import DropdownItem from './DropdownItem'

export default function Dropdown ({ items, title, itemsStyles, clickHandler, checkable, isChecked }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className="flex items-center p-1 border border-war-blue px-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {title}
        <FaChevronCircleDown className="w-4 h-4 ml-2"/>
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
    </>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}