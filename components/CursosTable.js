import DataTable from 'react-data-table-component'

function DetalleCurso ({ data }) {
  return (
    <div>
      Corte de Ranking: {data.corte}
    </div>
  )
}

export default function CursosTable ({ oferta }) {
  return (
    <DataTable
      columns={[
        {
          name: '#',
          selector: 'curso'
        },
        {
          name: 'MATERIA',
          selector: 'materia',
          format: (row) => row.materia.toUpperCase(),
          id: 'materia'
        },
        {
          name: 'DOCENTE',
          selector: (row) => {
            return row.docente === '' ? row.titular : row.docente
          },
          // format: (row) => row.docente.toUpperCase(),
          sortable: true,
          id: 'docente'
        },
        {
          name: 'CORTE',
          selector: row => {
            return (
              row.detalle.corte === null ? 0 : row.detalle.corte
            )
          },
          sortable: true,
          id: 'corte'
        }
      ]}
      data={oferta}
      keyField="curso"
      responsive={true}
      expandableRows
      expandableRowsComponent={<DetalleCurso />}
      pagination
      paginationPerPage={50}
    />
  )
}
