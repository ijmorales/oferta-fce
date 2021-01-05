import PropTypes from 'prop-types'

export default function ScoreCircle ({ score }) {
  return (
    <div className="flex justify-center items-center rounded-full h-11.5 w-11.5 bg-fce-orange border-black border">
      <p className="font-mono font-bold text-white text-sm">
        { score }
      </p>
    </div>
  )
}

ScoreCircle.propTypes = {
  score: PropTypes.number
}