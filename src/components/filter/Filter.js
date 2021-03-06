import PropTypes from 'prop-types';
import { FaChevronCircleDown } from 'react-icons/fa';

import { CORTE, useFilterCorte } from '../../hooks/useFilterCorte';
import { DIAS, useFilterDia } from '../../hooks/useFilterDia';
import { HORAS, useFilterHorario } from '../../hooks/useFilterHorario';
import Card from '../Card';
import Dropdown from '../dropdown/Dropdown';
import SearchBar from './SearchBar';
import SortBy from './SortBy';

export default function Filter({
  handleFilter,
  handleSort,
  handleSortDirection,
  currentSort,
  currentSortDirection
}) {
  const [diasFiltered, filterDia] = useFilterDia(handleFilter);
  const [horariosFiltered, filterHorario] = useFilterHorario(handleFilter);
  const [corteFiltered, filterCorte] = useFilterCorte(handleFilter);

  return (
    <Card className="flex flex-wrap justify-between xl:justify-between px-5 py-5 xl:px-7.5 items-center">
      <div className="flex w-full xl:w-175">
        <SearchBar handleSearch={handleFilter} />
      </div>
      <div className="flex flex-wrap justify-center items-center mx-auto">
        <div className="flex flex-wrap justify-center text-war-blue py-4 mx-2">
          <div className="px-1 mb-2 sm:mb-0">
            <Dropdown
              items={DIAS}
              clickHandler={(item) => filterDia(item)}
              checkable
              isChecked={(item) => diasFiltered.includes(item.toLowerCase())}
            >
              <div className="flex items-center p-1 border border-war-blue px-3 cursor-pointer">
                {'Dias'}
                <FaChevronCircleDown className="w-4 h-4 ml-2" />
              </div>
            </Dropdown>
          </div>
          <div className="px-1 mb-2 sm:mb-0">
            <Dropdown
              items={HORAS}
              itemsStyles="font-mono"
              clickHandler={(item) => filterHorario(item)}
              checkable
              isChecked={(item) => horariosFiltered.includes(item)}
            >
              <div className="flex items-center p-1 border border-war-blue px-3 cursor-pointer">
                {'Horarios'}
                <FaChevronCircleDown className="w-4 h-4 ml-2" />
              </div>
            </Dropdown>
          </div>
          <div className="px-1">
            <Dropdown
              items={CORTE}
              clickHandler={(item) => filterCorte(item)}
              checkable
              isChecked={(item) => corteFiltered.includes(item)}
            >
              <div className="flex items-center p-1 border border-war-blue px-3 cursor-pointer">
                {'Corte'}
                <FaChevronCircleDown className="w-4 h-4 ml-2" />
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-center items-center text-war-blue cursor-pointer py-4 xl:px-10">
          <SortBy
            currentSort={currentSort}
            currentSortDirection={currentSortDirection}
            handleSort={handleSort}
            handleSortDirection={handleSortDirection}
          />
        </div>
      </div>
    </Card>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func,
  handleSort: PropTypes.func,
  handleSortDirection: PropTypes.func,
  currentSort: PropTypes.string,
  currentSortDirection: PropTypes.string
};
