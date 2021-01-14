import fs from 'fs'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import Layout from '../components/layout/Layout'
import CursoGrid from '../components/cursos/CursoGrid'
import Filter from '../components/filter/Filter'
import { useState } from 'react'
import Paginator from '../components/pagination/Paginator'

export default function Oferta ({ oferta }) {
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)
  const [cursos, setCursos] = useState(chunk(oferta, itemsPerPage))
  function handleSearch (filterFn) {
    console.log('filtering...', filterFn)
    setCursos(chunk(oferta.filter(filterFn), itemsPerPage))
  }

  return (
    <Layout>
      <div className="mt-5 order-1 h-full">
        <Filter handleSearch={handleSearch}/>
      </div>
      {cursos && cursos.length > 1
        ? (
          <div className="mt-5 flex flex-grow order-3 w-full xl:self-end xl:order-2 xl:w-1/4">
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
