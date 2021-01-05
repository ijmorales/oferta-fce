import Layout from '../components/layout/Layout'
import fs from 'fs'
import CursoCard from '../components/cursos/CursoCard'

export default function Oferta ({ oferta }) {
  return (
    <Layout>
      <CursoCard curso={oferta[0]} />
    </Layout>
  )
}

export async function getStaticProps (context) {
  const oferta = JSON.parse(fs.readFileSync('data/oferta.example.json', 'utf8'))
  return {
    props: {
      oferta
    }
  }
}
