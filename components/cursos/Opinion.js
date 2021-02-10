import { FaUser } from 'react-icons/fa'
import Card from '../Card'

export default function Opinion ({ userNumber, text }) {
  let iconColor = 'text-war-blue'
  if (userNumber === 2) {
    iconColor = 'text-fce-orange'
  } else if (userNumber === 3) {
    iconColor = 'text-light-green'
  }

  return (
    <Card className="flex flex-col px-4 py-5">
      <div className="flex flex-grow space-between">
        <FaUser className={iconColor} />
        <span className="bg-war-blue italic">

        </span>
      </div>
      <p>
        { text }
      </p>
    </Card>
  )
}
