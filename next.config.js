const fs = require('fs')
const path = require('path')

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/oferta.example.json'), 'utf-8'))
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/oferta': { page: '/oferta' }
    }
    data.forEach((curso) => {
      paths[`/oferta/${curso.id}`] = { page: '/oferta/[id]' }
    })
    return paths
  }
}
