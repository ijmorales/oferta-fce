import PropTypes from 'prop-types';
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaChevronCircleDown
} from 'react-icons/fa';

import { HORAS } from '../../hooks/useFilterHorario';
import Dropdown from '../dropdown/Dropdown';

export const SORT_OPTIONS = [
  {
    displayName: 'Materia',
    sortFn: function (direction) {
      if (direction === 'asc') {
        return (a, b) =>
          a.materia.toLowerCase().localeCompare(b.materia.toLowerCase());
      } else {
        return (a, b) =>
          b.materia.toLowerCase().localeCompare(a.materia.toLowerCase());
      }
    }
  },
  {
    displayName: 'Docente',
    sortFn: function (direction) {
      if (direction === 'asc') {
        return (a, b) => {
          const docenteA = a.docente || a.titular;
          const docenteB = b.docente || b.titular;
          return docenteA.toLowerCase().localeCompare(docenteB.toLowerCase());
        };
      } else {
        return (a, b) => {
          const docenteA = a.docente || a.titular;
          const docenteB = b.docente || b.titular;
          return docenteB.toLowerCase().localeCompare(docenteA.toLowerCase());
        };
      }
    }
  }
];

export default function SortBy({
  handleSort,
  handleSortDirection,
  currentSort,
  currentSortDirection
}) {
  const clickHandler = (displayName) => {
    const sortObj = SORT_OPTIONS.find(
      (option) => option.displayName === displayName
    );
    handleSort(sortObj);
  };

  return (
    <>
      <Dropdown
        items={SORT_OPTIONS.map((item) => item.displayName)}
        clickHandler={clickHandler}
        isChecked={(item) => currentSort.displayName === item}
      >
        <div className="flex items-center">
          <span className="mr-3 flex items-center">
            <p className="mr-2">Ordenar por: {currentSort.displayName}</p>
            <FaChevronCircleDown />
          </span>
        </div>
      </Dropdown>
      <button
        onClick={() =>
          handleSortDirection(currentSortDirection === 'asc' ? 'desc' : 'asc')
        }
      >
        {currentSortDirection === 'asc' ? (
          <FaArrowCircleUp />
        ) : (
          <FaArrowCircleDown />
        )}
      </button>
    </>
  );
}

SortBy.propTypes = {
  handleSort: PropTypes.func.isRequired,
  handleSortDirection: PropTypes.func.isRequired,
  currentSort: PropTypes.string,
  currentSortDirection: PropTypes.string
};
