import PropTypes from 'prop-types'
export default function Card ({ children, className, ...rest }) {
  return (
    <div className={`bg-white shadow-md rounded-lg ${className}`} {...rest}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
