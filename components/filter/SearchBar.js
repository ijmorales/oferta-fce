import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar ({ handleSearch }) {
  const [searchValue, setSearchValue] = useState('')
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const searchFn = (curso, index) => curso.materia.toLowerCase().includes(searchValue) || curso.docente.toLowerCase().includes(searchValue)

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch(searchFn)
    }
  }

  return (
    <div className="flex">
      <FaSearch />
      <input type="text" placeholder="Buscar..." onChange={handleChange} value={searchValue} onKeyDown={handleKeyDown}
      />
    </div>
  )
}