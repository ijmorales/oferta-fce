import { FaUser } from 'react-icons/fa'
import Card from '../Card'
import classnames from 'classnames'

export default function Opinion ({ userNumber, text, number }) {
  let iconColor = 'text-war-blue'
  if (userNumber === 2) {
    iconColor = 'text-fce-orange'
  } else if (userNumber === 3) {
    iconColor = 'text-light-green'
  }

  return (
    <Card className="flex flex-col px-6 py-5">
      <div className="flex justify-between items-center">
        <FaUser className={classnames(iconColor, 'h-7 w-7')} />
        <span className="text-gray-600">
          # { number }
        </span>
      </div>
      <p className="mt-6 text-lg">
        { text }
      </p>
    </Card>
  )
}
