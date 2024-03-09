type HintProps = {
  hints: Array<string>
} 

export const Hint: React.FC<HintProps> = ({hints}) => {
  const hintsItems: Array<JSX.Element> = hints.map(hints => <span className="p-6 badge badge-lg badge-primary badge-outline ml-2 text-xl" key={hints}>{hints}</span>)
  return (
    <div>
      {hintsItems}
    </div>
  )
}
