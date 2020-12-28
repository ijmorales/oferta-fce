export const columns = [
  {
    name: '#',
    selector: 'curso'
  },
  {
    name: 'Materia',
    selector: 'materia',
    format: (row) => row.materia.toUpperCase(),
    id: 'materia',
    cellExport: (row) => row.materia.toUpperCase(),
    sortable: true
  },
  {
    name: 'Docente',
    selector: row => row.docente === '' ? row.titular : row.docente,
    // format: (row) => row.docente.toUpperCase(),
    sortable: true,
    id: 'docente',
    cellExport: row => row.docente === '' ? row.titular : row.docente
  },
  {
    name: 'Corte',
    selector: row => row.detalle.corte === null ? 0 : row.detalle.corte,
    sortable: true,
    id: 'corte',
    cellExport: row => row.detalle.corte === null ? 0 : row.detalle.corte
  }
]
