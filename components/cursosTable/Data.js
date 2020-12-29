import HorarioRow from './HorarioRow'

export const columns = [
  {
    id: 'numeroCurso',
    name: '#',
    selector: 'curso'
  },
  {
    id: 'materia',
    name: 'Materia',
    format: row => row.materia.toUpperCase(),
    selector: 'materia',
    cellExport: row => row.materia.toUpperCase(),
    sortable: true
  },
  {
    id: 'docente',
    name: 'Docente',
    format: row => row.docente.toUpperCase(),
    selector: row => row.docente === '' ? row.titular : row.docente,
    cellExport: row => row.docente === '' ? row.titular : row.docente,
    sortable: true
  },
  {
    id: 'dias',
    name: 'Dia y Horario',
    // eslint-disable-next-line react/display-name
    cell: row => (<HorarioRow diasHorario={row.diasHorario} />)
  },
  {
    id: 'corte',
    name: 'Corte',
    selector: row => row.detalle.corte === null ? 0 : row.detalle.corte,
    cellExport: row => row.detalle.corte === null ? 0 : row.detalle.corte,
    sortable: true
  },
  {
    id: 'aprobados',
    name: '% Aprobados',
    selector: row => row.detalle.porcentajeAprobados,
    format: row => {
      if (row.detalle.porcentajeAprobados) {
        return `${(row.detalle.porcentajeAprobados * 100).toFixed()} %`
      } else {
        return 'Sin datos'
      }
    },
    sortable: true
  }
]
