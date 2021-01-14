import Card from '../Card'
import FilterItem from './FilterItem'
import SearchBar from './SearchBar'
import SortBy from './SortBy'
import PropTypes from 'prop-types'

export default function Filter ({ handleSearch }) {
  return (
    <Card className="flex flex-col xl:flex-row xl:justify-between px-5 xl:px-7.5">
      <div className="flex my-5 xl:mr-5 w-full xl:w-175">
        <SearchBar handleSearch={ handleSearch } />
      </div>
      <div className="flex mx-5 flex-wrap justify-center mb-7 xl:mt-7 text-war-blue">
        <FilterItem displayName={'Dias'} field={'dias'} className="mr-1.5 mt-2 xl:mt-0 cursor-pointer"/>
        <FilterItem displayName={'Horarios'} field={'horarios'} className="mr-1.5 mt-2 xl:mt-0 cursor-pointer"/>
        <FilterItem displayName={'Corte'} field={'corte'} className="mr-1.5 mt-2 xl:mt-0 cursor-pointer"/>
        <FilterItem displayName={'Carrera'} field={'carrera'} className="mr-1.5 mt-2 xl:mt-0 cursor-pointer"/>
      </div>
      <div className="flex justify-center items-center text-war-blue cursor-pointer xl:my-5">
        <SortBy currentSort={'Nombre'} />
      </div>
    </Card>
  )
}

Filter.propTypes = {
  handleSearch: PropTypes.func
}
