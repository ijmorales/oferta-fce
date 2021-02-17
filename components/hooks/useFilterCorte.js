import { filter } from 'lodash';
import union from 'lodash/union';
import { useEffect, useState } from 'react';

export const CORTE = ['Tiene corte', 'No tiene corte'];

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
