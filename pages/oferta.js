import Layout from './layout/Layout'
import CursosTable from './components/CursosTable'
import fs from 'fs'

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
  console.log(process.cwd())
  const oferta = JSON.parse(fs.readFileSync('oferta.example.json', 'utf8'))
  console.log(oferta)
  return {
    props: {
      oferta
    }
  }
}
