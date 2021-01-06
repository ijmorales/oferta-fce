import Card from '../Card'
import FilterItem from './FilterItem'
import SearchBar from './SearchBar'
import SortBy from './SortBy'

export default function Filter ({ handleSearch }) {
  return (
    <Card>
      <SearchBar handleSearch={ handleSearch } />
      <div>
        <FilterItem name={'Dias'} field={'dias'} />
        <FilterItem name={'Horarios'} field={'horarios'} />
        <FilterItem name={'Corte'} field={'corte'} />
        <FilterItem name={'Carrera'} field={'carrera'} />
      </div>
      <SortBy />
    </Card>
  )
}