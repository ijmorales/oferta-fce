import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ handleSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchFn = (curso, index) =>
    curso.materia.toLowerCase().includes(searchValue) ||
    curso.docente.toLowerCase().includes(searchValue);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch(searchFn, 'search');
    }
  };

  return (
    <div className="flex flex-grow items-center">
      <div className="h-10 flex flex-grow">
        <div
          id="iconBox"
          className="flex bg-war-blue border border-war-blue rounded-l-full"
        >
          <div className="p-3 text-white h-full flex justify-center items-center">
            <FaSearch className="h-4 w-4" />
          </div>
        </div>
        <div
          id="inputContainer"
          className="flex flex-grow border border-war-blue rounded-r-full px-2 overflow-hidden"
        >
          <input
            type="text"
            placeholder="Buscar..."
            className="border-0 w-full p-2 focus:outline-none"
            onChange={handleChange}
            value={searchValue}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
