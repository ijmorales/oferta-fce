export default function Pill ({ text }) {
  return (
    <>
      <div className="px-3 py-0.5 rounded-full bg-strong-gray text-white text-sm font-medium text-center">
        { text }
      </div>
    </>
  )
}