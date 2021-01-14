import { FaChevronCircleDown } from "react-icons/fa";

export default function FilterItem ({ displayName, field, className }) {
  return (
    <div className={`rounded-full border border-war-blue items-center inline-flex cursor-pointer ${className}`}>
      <p className="ml-3">
        {displayName}
      </p>
      <FaChevronCircleDown height={16} width={16} className="ml-2 mr-3" />
    </div>
  )
}