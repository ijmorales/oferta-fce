import PropTypes from 'prop-types';

export default function CursoTitle({ materia, docente, numero }) {
  return (
    <>
      <h2 className="text-war-blue uppercase font-bold text-lg truncate">
        {materia}
      </h2>
      <p className="text-base text-light-green font-medium capitalize pt-1 truncate">
        {docente}
      </p>
      <p className="text-xs font-light italic pt-1">{numero}</p>
    </>
  );
}

CursoTitle.propTypes = {
  materia: PropTypes.string,
  docente: PropTypes.string,
  numero: PropTypes.string
};
