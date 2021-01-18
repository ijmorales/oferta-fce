import { FaChevronCircleDown } from "react-icons/fa"
import Dropdown from '../dropdown/Dropdown'

export default function FilterItem ({ displayName, items }) {
  return (
    <Dropdown title={ displayName }>
      { items }
    </Dropdown>
  )
}