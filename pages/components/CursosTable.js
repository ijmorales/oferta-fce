const CursosTable = ({ oferta }) => {
  return (
    <div className="bg-blue-200 w-full">
      {oferta.map((curso, index) => (
        <div key={index}>
          { curso.materia.toUpperCase() } - {curso.docente.toUpperCase()}
        </div>
      ))}
    </div>
  )
}

export default CursosTable
