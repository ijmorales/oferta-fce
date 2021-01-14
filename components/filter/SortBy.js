import PropTypes from 'prop-types'
import { FaChevronCircleDown } from 'react-icons/fa'

export default function SortBy ({ currentSort }) {
  return (
    <>
      <p className="mr-3">
        Ordenar por: { currentSort }
      </p>
      <FaChevronCircleDown/>
    </>
  )
}

SortBy.propTypes = {
  currentSort: PropTypes.string.required
}