import { useState, useEffect } from 'react'
import { union } from 'lodash'

export const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
export function useFilterDia (handleFilter) {
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
      if (curso.horario === null) { return false }

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
