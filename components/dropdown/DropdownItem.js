import { useState } from "react";

export default function DropdownItem ({ title, checkable = false, checked }) {
  const [selected, setSelected] = useState(checked)
  return (
    <>
      { checkable
        ? (
            <input
            type="radio"
            checked={checked}
            onChange={() => setSelected(checked)}
            className="mr-3"
            />
          )
        : null
        }
      { title }
    </>
  )
}
