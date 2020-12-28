import Layout from '../components/layout/Layout'
import fs from 'fs'
import dynamic from 'next/dynamic'

const CursosTable = dynamic(
  () => import('../components/CursosTable'),
  { ssr: false }
)
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
  const oferta = JSON.parse(fs.readFileSync('oferta.example.json', 'utf8'))
  return {
    props: {
      oferta
    }
  }
}
