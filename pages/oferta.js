import fs from 'fs'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import Layout from '../components/layout/Layout'
import CursoGrid from '../components/cursos/CursoGrid'
import Filter from '../components/filter/Filter'
import { useEffect, useState } from 'react'
import Paginator from '../components/pagination/Paginator'
import Dropdown from '../components/dropdown/Dropdown'
import { update } from 'lodash'

export default function Oferta ({ oferta }) {
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)
  const [cursos, setCursos] = useState([])
  const [currentFilters, setCurrentFilters] = useState({})

  function handleFilter (filterFn, filterKey) {
    // Add filter to the list of current filters or replace
    const updatedFilters = Object.assign(currentFilters, { [filterKey]: filterFn })

    // Apply every filter
    const filteredOferta = Object.values(updatedFilters).reduce((oferta, filterFn) => (
      oferta.filter(filterFn))
    , oferta)
    console.log(updatedFilters)

    setCursos(chunk(filteredOferta, itemsPerPage))
    setCurrentFilters(updatedFilters)
    setCurrentPage(1)
  }

  useEffect(() => {
    setCursos(chunk(oferta, itemsPerPage))
  }, [])

  return (
    <Layout>
      <div className="mt-5 order-1 h-full">
        <Filter handleFilter={handleFilter}/>
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
