import PropTypes from 'prop-types'
import Card from '../Card'
import SearchBar from './SearchBar'
import SortBy from './SortBy'
import Dropdown from '../dropdown/Dropdown'
import { useFilterDia, DIAS } from '../hooks/useFilterDia'
import { useFilterHorario, HORAS } from '../hooks/useFilterHorario'
import { useFilterCorte, CORTE } from '../hooks/useFilterCorte'
import { FaChevronCircleDown } from 'react-icons/fa'

export default function Filter ({ handleFilter, handleSort, handleSortDirection, currentSort, currentSortDirection }) {
  const [diasFiltered, filterDia] = useFilterDia(handleFilter)
  const [horariosFiltered, filterHorario] = useFilterHorario(handleFilter)
  const [corteFiltered, filterCorte] = useFilterCorte(handleFilter)

  return (
    <Card className="flex justify-between xl:flex-row xl:justify-between px-5 py-5 xl:px-7.5">
      <div className="flex w-full xl:w-175">
        <SearchBar handleSearch={ handleFilter } />
      </div>
      <div className="flex flex-wrap items-center">
        <div className="flex flex-wrap justify-center text-war-blue py-4">
          <div className="px-1">
            <Dropdown
              items={DIAS}
              clickHandler={(item) => filterDia(item)}
              checkable
              isChecked={(item) => diasFiltered.includes(item.toLowerCase())}
            >
              <div
                className="flex items-center p-1 border border-war-blue px-3 cursor-pointer"
              >
                {'Dias'}
                <FaChevronCircleDown className="w-4 h-4 ml-2"/>
              </div>
            </Dropdown>
          </div>
          <div className="px-1">
            <Dropdown
              items={HORAS}
              itemsStyles="font-mono"
              clickHandler={(item) => filterHorario(item)}
              checkable
              isChecked={(item) => horariosFiltered.includes(item)}
            >
              <div
                className="flex items-center p-1 border border-war-blue px-3 cursor-pointer"
              >
                {'Horarios'}
                <FaChevronCircleDown className="w-4 h-4 ml-2"/>
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
              <div
                className="flex items-center p-1 border border-war-blue px-3 cursor-pointer"
              >
                {'Corte'}
                <FaChevronCircleDown className="w-4 h-4 ml-2"/>
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
  )
}

Filter.propTypes = {
  handleFilter: PropTypes.func,
  handleSort: PropTypes.func,
  handleSortDirection: PropTypes.func,
  currentSort: PropTypes.string,
  currentSortDirection: PropTypes.string
}
