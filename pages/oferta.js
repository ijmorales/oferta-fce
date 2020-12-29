import Layout from '../components/layout/Layout'
import CursosTable from '../components/cursosTable/CursosTable'
import fs from 'fs'
import path from 'path'

export default function Oferta ({ oferta }) {
  return (
    <Layout>
      <div className="p-4 shadow-lg rounded">
        <h1 className="mb-8">Oferta</h1>
        <CursosTable data={oferta}></CursosTable>
      </div>
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
