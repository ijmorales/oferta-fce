import PropTypes from 'prop-types';

export default function Content({ children, show }) {
  return (
    <div id="content-wrapper" className={show ? 'overflow-y-auto' : 'hidden'}>
      <div id="content" className="container mx-auto pt-4 flex flex-col">
        {children}
      </div>
    </div>
  );
}

Content.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.object
};
