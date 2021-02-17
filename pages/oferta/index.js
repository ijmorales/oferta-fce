import fs from 'fs';
import chunk from 'lodash/chunk';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import CursoGrid from '../../src/components/cursos/CursoGrid';
import Filter from '../../src/components/filter/Filter';
import { SORT_OPTIONS } from '../../src/components/filter/SortBy';
import Layout from '../../src/components/layout/Layout';
import Paginator from '../../src/components/pagination/Paginator';

export default function Oferta({ oferta }) {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [cursos, setCursos] = useState(chunk(oferta, itemsPerPage));
  const [currentFilters, setCurrentFilters] = useState({});
  const [currentSort, setCurrentSort] = useState(SORT_OPTIONS[0]);
  const [currentSortDirection, setCurrentSortDirection] = useState('asc');

  function handleFilter(filterFn, filterKey) {
    // Add filter to the list of current filters or replace
    const updatedFilters = Object.assign(currentFilters, {
      [filterKey]: filterFn
    });

    // Apply every filter
    const filteredOferta = Object.values(updatedFilters).reduce(
      (oferta, filterFn) => oferta.filter(filterFn),
      oferta
    );

    setCursos(chunk(filteredOferta, itemsPerPage));
    setCurrentFilters(updatedFilters);
    setCurrentPage(1);
  }

  function sortCursos(sortFn) {
    const reducedCursos = cursos.reduce((acc, page) => acc.concat(page), []);
    const sortedCursos = reducedCursos.sort(sortFn);
    return sortedCursos;
  }

  function handleSort(sortObj) {
    setCurrentSort(sortObj);
    setCursos(
      chunk(sortCursos(sortObj.sortFn(currentSortDirection)), itemsPerPage)
    );
  }

  function handleSortDirection(sortDirection) {
    setCurrentSortDirection(sortDirection);
    setCursos(
      chunk(sortCursos(currentSort.sortFn(sortDirection)), itemsPerPage)
    );
  }

  return (
    <Layout>
      <div className="mt-5 order-1 h-full">
        <Filter
          handleFilter={handleFilter}
          handleSort={handleSort}
          handleSortDirection={handleSortDirection}
          currentSort={currentSort}
          currentSortDirection={currentSortDirection}
        />
      </div>
      {cursos && cursos.length > 1 ? (
        <div className="mt-5 flex order-3 xl:self-end xl:order-2 justify-center md:justify-end">
          <Paginator
            currentPage={currentPage}
            totalPages={cursos.length}
            selectPage={(pageNumber) => setCurrentPage(pageNumber)}
          />
        </div>
      ) : null}
      <div className="mt-5 xl:order-3 order-2">
        <CursoGrid cursos={cursos[currentPage - 1]} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  let oferta = JSON.parse(fs.readFileSync('data/oferta.example.json', 'utf-8'));
  oferta = oferta.map((curso) => {
    if (!curso.docente) {
      curso.docente = curso.titular;
    }
    return curso;
  });
  oferta = oferta.filter((curso) => curso.docente)
  return {
    props: {
      oferta: oferta
    }
  };
}

Oferta.propTypes = {
  oferta: PropTypes.array
};
