import PropTypes from 'prop-types'

export default function CursoCard ({ curso }) {
  return (
    <article className="bg-white lg:w-96 w-93.5 h-59.5 shadow-md rounded-lg p-5">
      <div id="article-header">
        <h2 className="text-war-blue uppercase">
          { curso.materia }
        </h2>
        { curso.docente }
        { curso.numero }
        { curso.puntaje }
      </div>
      <ul>
        { curso.horario.map((horario, index) => (
          <li key={index}> {horario.dia}: {horario.hora} </li>
        )) }
      </ul>
      <div id="estadisticas">
        { curso.detalle.estadisticas[0].inscriptos }
        { curso.detalle.maxRegistro }
        { curso.detalle.corte }
      </div>
    </article>
  )
}

CursoCard.propTypes = {
  curso: PropTypes.shape({
    id: PropTypes.number.isRequired,
    numero: PropTypes.number.isRequired,
    materia: PropTypes.string.isRequired,
    docente: PropTypes.string,
    inscriptos: PropTypes.number,
    corte: PropTypes.number,
    maxRegistro: PropTypes.number,
    puntaje: PropTypes.number,
    horario: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
    detalle: PropTypes.object
  })
}