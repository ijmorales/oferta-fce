import fs from 'fs'
import PropTypes from 'prop-types'

export default function Curso ({ curso }) {
  if (curso == null) {
    return (
      <div>
        Page not found
      </div>
    )
  }
  return (
    <div>
      {curso.id}
    </div>
  )
}

export async function getStaticProps ({ params }) {
  const oferta = JSON.parse(fs.readFileSync('data/oferta.example.json', 'utf-8'))
  const curso = oferta.find((curso) => curso.id === parseInt(params.id))

  return { props: { curso } }
}

export async function getStaticPaths () {
  const oferta = JSON.parse(fs.readFileSync('data/oferta.example.json', 'utf-8'))
  const paths = oferta.map(curso => (
    {
      params: { id: curso.id.toString() }
    }
  ))

  return {
    paths: paths,
    fallback: false
  }
}

Curso.propTypes = {
  curso: PropTypes.object
}
