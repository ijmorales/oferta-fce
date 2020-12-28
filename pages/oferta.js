import Layout from '../components/layout/Layout'
import CursosTable from '../components/CursosTable'
import fs from 'fs'
import path from 'path'

export default function Oferta ({ oferta }) {
  return (
    <Layout>
      <div className="p-4 shadow-lg rounded">
        <h1 className="mb-8">Oferta</h1>
        <CursosTable oferta={oferta}></CursosTable>
      </div>
    </Layout>
  )
}

export async function getStaticProps (context) {
  const oferta = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'oferta.example.json'), 'utf8'))
  return {
    props: {
      oferta
    }
  }
}
