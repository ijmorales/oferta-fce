import fs from 'fs'

export default function handler (req, res) {
  let oferta = JSON.parse(fs.readFileSync('data/oferta.example.json', 'utf8'))
  oferta = oferta.map((curso) => {
    if (!curso.docente) {
      curso.docente = curso.titular
    }
    return curso
  })
  return res.status(200).json({ oferta: oferta })
}
