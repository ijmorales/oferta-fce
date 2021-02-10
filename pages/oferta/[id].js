import fs from 'fs'
import PropTypes from 'prop-types'
import Layout from '../../components/layout/Layout'
import Opinion from '../../components/cursos/Opinion'
import { useRef } from 'react'
export default function Curso ({ curso }) {
  if (curso == null) {
    return (
      <div>
        Page not found
      </div>
    )
  }

  const comentarios = {}
  if (curso.detalle) {
    const userNumber = useRef(1)
    Object.entries(curso.detalle.comentarios).forEach((anio) => {
      comentarios[anio[0]] = []
      anio[1].forEach((comentario, idx) => {
        if (idx === 0 || userNumber.current === 3) {
          userNumber.current = 1
        }
        if (userNumber.current === 1) {
          userNumber.current += 1
        }
        if (userNumber.current === 2) {
          userNumber.current += 1
        }

        comentarios[anio[0]].push(<Opinion text={comentario} key={idx} userNumber={userNumber.current} />)
      })
    })
  }

  console.log(comentarios)
  return (
    <Layout>
      { Object.keys(comentarios).length > 1
        ? (
            Object.entries(comentarios).map(anio => (
                <div className="" key={anio[0]}>
                  <h2>{anio[0]}</h2>
                  <div className="overflow-auto">
                    {anio[1]}
                  </div>
                </div>
            ))
          )
        : (
            <div>
              No hay comentarios
            </div>
          )
      }
    </Layout>
  )
}

export async function getStaticProps ({ params, ...ctx }) {
  const oferta = JSON.parse(fs.readFileSync('data/oferta.example.json', 'utf-8'))
  const curso = oferta.find((curso) => curso.id === parseInt(params.id))

  return { props: { curso: curso || null } }
}

export async function getStaticPaths () {
  const oferta = JSON.parse(fs.readFileSync('data/oferta.example.json', 'utf-8'))
  const paths = oferta.map(curso => {
    return {
      params: { id: curso.id.toString() }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

Curso.propTypes = {
  curso: PropTypes.object
}
