import { useEffect, useState } from 'react';

export const HORAS = [
  '07:00-09:00',
  '09:00-11:00',
  '11:00-13:00',
  '13:00-15:00',
  '15:00-17:00',
  '17:00-19:00',
  '19:00-21:00',
  '21:00-23:00',
  'Virtual'
];

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
