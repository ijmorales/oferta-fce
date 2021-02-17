import PropTypes from 'prop-types';

import CursoCard from './CursoCard';

export default function CursoGrid({ cursos }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-9">
      {cursos
        ? cursos.map((curso, index) => <CursoCard key={index} curso={curso} />)
        : 'No hay cursos'}
    </div>
  );
}

CursoGrid.propTypes = {
  cursos: PropTypes.array
};
