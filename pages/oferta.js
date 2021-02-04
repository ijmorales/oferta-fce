import fs from 'fs'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import Layout from '../components/layout/Layout'
import CursoGrid from '../components/cursos/CursoGrid'
import Filter from '../components/filter/Filter'
import { useEffect, useState } from 'react'
import Paginator from '../components/pagination/Paginator'
import { SORT_OPTIONS } from '../components/filter/SortBy'

export default function Oferta ({ oferta }) {
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)
  const [cursos, setCursos] = useState(chunk(oferta, itemsPerPage))
  const [currentFilters, setCurrentFilters] = useState({})
  const [currentSort, setCurrentSort] = useState(SORT_OPTIONS[0])
  const [currentSortDirection, setCurrentSortDirection] = useState('asc')

  function handleFilter (filterFn, filterKey) {
    // Add filter to the list of current filters or replace
    const updatedFilters = Object.assign(currentFilters, { [filterKey]: filterFn })

    // Apply every filter
    const filteredOferta = Object.values(updatedFilters).reduce((oferta, filterFn) => (
      oferta.filter(filterFn))
    , oferta)

    setCursos(chunk(filteredOferta, itemsPerPage))
    setCurrentFilters(updatedFilters)
    setCurrentPage(1)
  }

  // useEffect(() => {
  //   Sort data on oferta change
  //   const sortedOferta = oferta.sort(currentSort.sortFn(currentSortDirection))
  //   setCursos(chunk(sortedOferta, itemsPerPage))
  // }, [oferta])

  useEffect(() => {
    const reducedCursos = cursos.reduce((acc, page) => acc.concat(page), [])
    const sortedCursos = reducedCursos.sort(currentSort.sortFn(currentSortDirection))
    setCursos(chunk(sortedCursos, itemsPerPage))
  }, [currentSort, currentSortDirection])

  return (
    <Layout>
      <div className="mt-5 order-1 h-full">
        <Filter
          handleFilter={handleFilter}
          handleSort={(sortObj) => setCurrentSort(sortObj)}
          handleSortDirection={(sortDirection) => setCurrentSortDirection(sortDirection)}
          currentSort={currentSort}
          currentSortDirection={currentSortDirection}
        />
      </div>
      {cursos && cursos.length > 1
        ? (
          <div className="mt-5 flex order-3 xl:self-end xl:order-2">
            <Paginator
              currentPage={currentPage}
              totalPages={cursos.length}
              selectPage={(pageNumber) => setCurrentPage(pageNumber)}
            />
          </div>
          )
        : null
      }
      <div className="mt-5 xl:order-3 order-2">
        <CursoGrid cursos={cursos[currentPage - 1]}/>
      </div>
    </Layout>
  )
}

export async function getStaticProps (context) {
  let oferta = JSON.parse(fs.readFileSync('data/oferta.example.json', 'utf8'))
  oferta = oferta.map((curso) => {
    if (!curso.docente) {
      curso.docente = curso.titular
    }
    return curso
  })
  return {
    props: {
      oferta
    }
  }
}

Oferta.propTypes = {
  oferta: PropTypes.array
}
