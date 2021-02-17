import { filter } from 'lodash';
import union from 'lodash/union';
import { useEffect, useState } from 'react';

import { Curso } from '../types/index';

type FilterFN = {
  (handleFilter: (curso: Curso) => void);
};

export function useFilter<T>(handleFilter: FilterFN, filters: T): void {
  const [current, setCurrent] = useState<Array<>>(filters);

}

export function useFilterCorte(handleFilter) {
  const [filteredCorte, setFilteredCorte] = useState([
    'Tiene corte',
    'No tiene corte'
  ]);

  function filterCorte(corte) {
    if (filteredCorte.includes(corte)) {
      setFilteredCorte(filteredCorte.filter((option) => corte !== option));
    } else {
      setFilteredCorte(filteredCorte.concat(filteredCorte, [corte]));
    }
  }

  useEffect(() => {
    handleFilter((curso) => {
      const hasCorte = curso.detalle && curso.detalle.corte;
      if (hasCorte) {
        return filteredCorte.includes('Tiene corte');
      } else {
        return filteredCorte.includes('No tiene corte');
      }
    }, 'corte');
  }, [filteredCorte]);

  return [filteredCorte, filterCorte];
}

export function useFilterDia(handleFilter) {
  const [diasFiltered, setDiasFiltered] = useState(
    DIAS.map((dia) => dia.toLowerCase())
  );

  const filterDia = (dia) => {
    const diaLower = dia.toLowerCase();
    if (diasFiltered.includes(diaLower)) {
      setDiasFiltered(diasFiltered.filter((elem) => elem !== diaLower));
    } else {
      setDiasFiltered(union(diasFiltered, [diaLower]));
    }
  };

  useEffect(() => {
    handleFilter((curso) => {
      // Handle Virtual cursos (cursos that have no Horario)

      if (curso.horario === null) {
        return diasFiltered.includes('virtual');
      }

      const diasCurso = curso.horario
        .map((diaHorario) => diaHorario.dia)
        .sort();

      // Check if diasFiltered contains diasCurso - O(n) solution compared
      // to using every and indexOf directly O(n2)

      const diasFilteredObj = {};
      diasFiltered.forEach((elem, idx) => {
        diasFilteredObj[elem] = idx;
      });

      const match = diasCurso.every((elem) => {
        return diasFilteredObj[elem] !== undefined;
      });

      return match;
    }, 'dia');
  }, [diasFiltered]);

  return [diasFiltered, filterDia];
}

export function useFilterHorario(handleFilter) {
  const [filteredHorarios, setFilteredHorarios] = useState(HORAS);

  function filterHorario(horario) {
    // If it's already included, remove it
    if (filteredHorarios.includes(horario)) {
      setFilteredHorarios(filteredHorarios.filter((elem) => elem !== horario));
    } else {
      setFilteredHorarios(filteredHorarios.concat([horario]));
    }
  }

  // Indeed this could be done without an effect, which would trigger less re-renders
  useEffect(() => {
    handleFilter((curso) => {
      if (curso.horario === null) {
        return filteredHorarios.includes('Virtual');
      }
      const horarios = curso.horario.map((diaHorario) => diaHorario.hora);

      const filteredHorariosObj = {};
      filteredHorarios.forEach((elem, idx) => {
        filteredHorariosObj[elem] = idx;
      });

      const match = horarios.every((elem) => {
        return filteredHorariosObj[elem] !== undefined;
      });

      return match;
    }, 'horario');
  }, [filteredHorarios]);

  return [filteredHorarios, filterHorario];
}
