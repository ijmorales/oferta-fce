import { useState } from "react";

export default function DropdownItem ({ title, checkable = false, checked }) {
  //const [selected, setSelected] = useState(isSelected !== undefined ? isSelected(title) : false)
  return (
    <>
      { checkable
        ? (
            <input
            type="radio"
            checked={checked}
            className="mr-3"
            />
          )
        : null
        }
      { title }
    </>
  )
}
