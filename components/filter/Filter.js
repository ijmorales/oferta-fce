import PropTypes from 'prop-types'
import Card from '../Card'
import FilterItem from './FilterItem'
import SearchBar from './SearchBar'
import SortBy from './SortBy'
import Dropdown from '../dropdown/Dropdown'
import { useEffect, useState } from 'react'
import { forEach, union } from 'lodash'

const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const HORARIOS = [
  '07:00-09:00',
  '09:00-11:00',
  '11:00-13:00',
  '13:00-15:00',
  '15:00-17:00',
  '17:00-19:00',
  '19:00-21:00',
  '21:00-23:00'
]
const CORTE = ['Tiene corte', 'No tiene corte']

function useDiaFilter (handleFilter) {
  const [diasFiltered, setDiasFiltered] = useState(DIAS.map((dia) => dia.toLowerCase()))

  const filterDia = (dia) => {
    const diaLower = dia.toLowerCase()
    if (diasFiltered.includes(diaLower)) {
      setDiasFiltered(diasFiltered.filter((elem) => elem !== diaLower))
    } else {
      setDiasFiltered(union(diasFiltered, [diaLower]))
    }
  }

  useEffect(() => {
    handleFilter((curso) => {
      if (curso.horario.length === 0) { return false }

      const diasCurso = curso.horario.map((diaHorario) => diaHorario.dia).sort()

      // Check if diasFiltered contains diasCurso - O(n) solution compared
      // to using every and indexOf directly O(n2)

      const diasFilteredObj = {}
      diasFiltered.forEach((elem, idx) => {
        diasFilteredObj[elem] = idx
      })

      const match = diasCurso.every((elem) => {
        return diasFilteredObj[elem] !== undefined
      })

      return match
    }, 'dia')
  }, [diasFiltered])

  return [diasFiltered, filterDia]
}

export default function Filter ({ handleFilter }) {
  const [diasFiltered, filterDia] = useDiaFilter(handleFilter)

  return (
    <Card className="flex justify-between xl:flex-row xl:justify-between px-5 py-5 xl:px-7.5">
      <div className="flex w-full xl:w-175">
        <SearchBar handleSearch={ handleFilter } />
      </div>
      <div className="flex flex-wrap items-center">
        <div className="flex flex-wrap justify-center text-war-blue py-4">
          <div className="px-1">
            <Dropdown
              title={'Dias'}
              items={DIAS}
              clickHandler={(item) => filterDia(item)}
              checkable
              isChecked={(item) => diasFiltered.includes(item.toLowerCase())}
            />
          </div>
          <div className="px-1">
            <Dropdown
              title={'Horarios'}
              items={HORARIOS}
              itemsStyles="font-mono"
              filterFn={null}
            />
          </div>
          <div className="px-1">
            <Dropdown
              title={'Corte'}
              items={CORTE}
            />
          </div>
        </div>
        <div className="flex justify-center items-center text-war-blue cursor-pointer py-4 xl:px-10">
          <SortBy currentSort={'Nombre'} />
        </div>
      </div>
    </Card>
  )
}

Filter.propTypes = {
  handleFilter: PropTypes.func
}
