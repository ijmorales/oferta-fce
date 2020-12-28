import DataTable from 'react-data-table-component'
import DataTableExtensions from 'react-data-table-component-extensions'
import { columns } from './Data'

function DetalleCurso ({ data }) {
  return (
    <div>
      { data.detalle.comentarios.map((c, idx) => (
        <div key={idx}>
          <p>
            {c}
          </p>
        </div>
      )) }
      Corte de Ranking: {data.detalle.corte}
    </div>
  )
}

export default function CursosTable ({ data }) {
  return (
    <DataTableExtensions
      columns={columns}
      data={data}
    >
      <DataTable
        keyField="curso"
        responsive={true}
        expandableRows
        expandableRowsComponent={<DetalleCurso />}
        pagination
        paginationPerPage={50}
        highlightOnHover
        noHeader
      />
    </DataTableExtensions>
  )
}
