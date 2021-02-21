const fs = require('fs');
const { redirect } = require('next/dist/next-server/server/api-utils');
const path = require('path')

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/oferta.example.json'), 'utf-8'))
    const paths = {
      '/': { page: '/' },
      '/oferta': { page: '/oferta' }
    };
    data.forEach((curso) => {
      if (curso.docente || curso.titular) {
        paths[`/oferta/${curso.id}`] = { page: '/oferta/[id]' }
      }
    })
    return paths
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/oferta',
        permanent: true
      },
    ]
  },
};
