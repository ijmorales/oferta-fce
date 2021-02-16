import PropTypes from 'prop-types'
import classnames from 'classnames'
export default function Card ({ children, className, ...rest }) {
  return (
    <div className={classnames('bg-white shadow-md rounded-lg', className, rest)}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
