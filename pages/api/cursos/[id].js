import fs from 'fs'

export default function handler (req, res) {
  const {
    id
  } = req
  const oferta = JSON.parse(fs.readFileSync('data/oferta.example.json', 'uft-8'))
  const curso = oferta.find((curso) => curso.id === id)

  if (!curso) {
    return res.status(404)
  }

  return res.status(200).json(curso)
}