import PropTypes from 'prop-types'
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import classnames from 'classnames'
import Card from '../Card'

const PageItem = ({ pageNumber, current, selectPageHandler }) => (
  <div
    className={
      classnames('page-item',
        'xl:px-3 xl:py-2 px-2 py-2',
        'flex justify-center items-center flex-grow',
        current ? 'bg-fce-orange text-white page-item' : null)
    }
    key={pageNumber}
    onClick={() => selectPageHandler(pageNumber)}
  >
    <p>
      {pageNumber}
    </p>
  </div>
)

export default function Paginator ({ totalPages, currentPage, selectPage }) {
  const selectPageHandler = (pageNumber) => {
    if (pageNumber <= totalPages && pageNumber >= 1) { selectPage(pageNumber) }
  }

  function getPages () {
    const sidePages = 3 // Display x pages to the left and to the right of the current page
    const maxPages = sidePages * 2 + 1
    const generatedPages = []
    let pagesLeft = Math.min(sidePages, currentPage - 1)
    const pagesRight = Math.min(sidePages, totalPages - currentPage)

    // Fill to the left if there's not enough elements on right side
    // and if there's space in the left
    if (pagesRight <= sidePages && (currentPage - pagesLeft) > 1) {
      pagesLeft += sidePages - pagesRight
    }

    for (let i = currentPage - pagesLeft; i <= totalPages; i++) {
      if (generatedPages.length >= maxPages || i <= 0) {
        continue
      }
      generatedPages.push(<PageItem pageNumber={i} current={i === currentPage} selectPageHandler={selectPageHandler} />)
    }

    return generatedPages
  }

  const pages = getPages()

  return (
    <Card className="xl:inline-flex  flex text-war-blue flex-grow px-2">
      <div className="page-item flex flex-col justify-center mr-1" onClick={() => selectPageHandler(1)}>
        <div className="flex flex-col justify-center  h-full">
          <FaAngleDoubleLeft className="text-xl" />
        </div>
      </div>
      <div className="page-item flex flex-col justify-center" onClick={() => selectPageHandler(currentPage - 1)}>
        <div className="flex flex-col justify-center h-full">
          <FaAngleLeft className="text-xl" />
        </div>
      </div>
      {pages.map((page, idx) => (
        <>
          {page}
        </>
      ))}
      <div className="page-item flex flex-col justify-center mr-1" onClick={() => selectPageHandler(currentPage + 1)}>
        <div className="flex flex-col justify-center h-full">
          <FaAngleRight className="text-xl" />
        </div>
      </div>
      <div className="page-item flex flex-col justify-center" onClick={() => selectPageHandler(totalPages)}>
        <div className="flex flex-col justify-center h-full">
          <FaAngleDoubleRight className="text-xl" />
        </div>
      </div>
    </Card>
  )
}

Paginator.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  selectPage: PropTypes.func
}

PageItem.propTypes = {
  selectPageHandler: PropTypes.func,
  pageNumber: PropTypes.number,
  current: PropTypes.bool
}
