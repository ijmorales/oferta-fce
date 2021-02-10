import PropTypes from 'prop-types'
import { FaUsers, FaCut, FaUniversity } from 'react-icons/fa'
import CursoTitle from './CursoTitle'
import ExtraInfo from './ExtraInfo'
import ScoreCircle from './ScoreCircle'
import Card from '../Card'

export default function CursoCard ({ curso }) {
  return (
    <a href={`/oferta/${curso.id}`}>
      <Card>
        <article className="lg:w-96 h-59.5 p-5 flex flex-col justify-between">
          <div id="article-header" className="flex justify-between">
            <div className="flex flex-col flex-grow w-5/6">
              <CursoTitle materia={curso.materia} docente={curso.docente} numero={curso.curso} />
            </div>
            <div className="ml-4">
              <ScoreCircle score={curso.detalle ? Math.fround(curso.detalle.puntaje).toFixed(1) : 'N/D'} />
            </div>
          </div>
          <ul>
            { curso.horario
              ? (
                  curso.horario.map((horario, index) => (
                      <li key={index} className="flex justify-between font-mono">
                        <span>
                          {horario.dia}
                        </span>
                        <span>
                        {horario.hora}
                        </span>
                      </li>
                  )
                  ))
              : 'No hay datos'}
          </ul>
          <div id="estadisticas" className="flex justify-between">
            <ExtraInfo icon={FaUniversity} value={curso.sede} />
            {curso.detalle.estadisticas
              ? (
                <>
                  <ExtraInfo icon={FaUsers} value={curso.detalle.estadisticas[0].inscriptos} />
                  <ExtraInfo icon={FaCut} value={curso.detalle.corte} />
                </>
                )
              : 'No hay datos'
            }
          </div>
        </article>
      </Card>
    </a>
  )
}

CursoCard.propTypes = {
  curso: PropTypes.shape({
    id: PropTypes.number.isRequired,
    numero: PropTypes.number,
    curso: PropTypes.string,
    materia: PropTypes.string.isRequired,
    docente: PropTypes.string,
    inscriptos: PropTypes.number,
    corte: PropTypes.number,
    maxRegistro: PropTypes.number,
    puntaje: PropTypes.number,
    horario: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    detalle: PropTypes.object,
    sede: PropTypes.string
  })
}