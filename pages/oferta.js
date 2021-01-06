import fs from 'fs'
import PropTypes from 'prop-types'
import Layout from '../components/layout/Layout'
import CursoGrid from '../components/cursos/CursoGrid'
import Filter from '../components/filter/Filter'
import { useState } from 'react'

export default function Oferta ({ oferta }) {
  const [cursos, setCursos] = useState(oferta)
  const handleSearch = (filterFn) => {
    console.log('filtering...', filterFn)
    setCursos(oferta.filter(filterFn))
  }
  return (
    <Layout>
      <div className="mt-12">
        <Filter handleSearch={handleSearch}/>
      </div>
      <div className="mt-10">
        <CursoGrid cursos={cursos} />
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
