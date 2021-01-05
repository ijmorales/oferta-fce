export default function Card({ children }) {
  return (
    <article className="bg-white lg:w-96 w-93.5 h-59.5 shadow-md rounded-lg p-5 flex flex-col justify-between">
      { children }
    </article>
  )
}