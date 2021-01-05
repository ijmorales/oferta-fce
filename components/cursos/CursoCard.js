import PropTypes from 'prop-types'
import { FaUsers, FaStopwatch, FaCut } from 'react-icons/fa'
import CursoTitle from './CursoTitle'
import Stat from './Stat'
import ScoreCircle from './ScoreCircle'
import Card from '../Card'

export default function CursoCard ({ curso }) {
  return (
    <Card>
      <div id="article-header" className="flex justify-between">
        <div className="flex flex-col">
          <CursoTitle materia={curso.materia} docente={curso.docente} numero={curso.curso} />
        </div>
        <ScoreCircle score={curso.detalle.puntaje} />
      </div>
      <ul>
        { curso.horario.map((horario, index) => (
          <li key={index} className="flex justify-between font-mono">
            <span>
              {horario.dia}
            </span>
            <span>
             {horario.hora}
            </span>
          </li>
        )) }
      </ul>
      <div id="estadisticas" className="flex justify-between">
        <Stat icon={FaUsers} value={curso.detalle.estadisticas[0].inscriptos} />
        <Stat icon={FaStopwatch} value={curso.maxRegistro} />
        <Stat icon={FaCut} value={curso.corte} />
      </div>
    </Card>
  )
}

CursoCard.propTypes = {
  curso: PropTypes.shape({
    id: PropTypes.number.isRequired,
    numero: PropTypes.number.isRequired,
    curso: PropTypes.string,
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