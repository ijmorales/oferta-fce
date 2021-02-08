import PropTypes from 'prop-types'

export default function Curso ({ curso }) {
  return (
    <div>
      {curso.id}
      {curso.nombre}
    </div>
  )
}

export async function getStaticProps ({ params }) {
  const res = await fetch(`http://localhost:3000/oferta/${params.id}`)
  const curso = await res.json()
  console.log(params)

  return { props: { curso } }
}

export async function getStaticPaths () {
  const res = await fetch('http://localhost:3000/api/cursos')
  const data = await res.json()
  const paths = data.oferta.map(curso => (
    {
      params: { id: curso.id.toString() }
    }
  ))

  return {
    paths,
    fallback: true
  }
}

Curso.propTypes = {
  curso: PropTypes.object
}
