import Pill from './Pill'

export default function ExtraInfo ({ icon, value }) {
  const Icon = icon
  return (
    <div className="flex">
      <span className="pr-2.5 flex flex-col justify-center">
        <Icon className="h-6 w-6 text-war-blue" />
      </span>
      { value
        ? (
          <span className="text-base text-fce-orange font-medium font-mono">
            { value }
          </span>
          )
        : <Pill text="N/D"/>
      }
    </div>
  )
}
