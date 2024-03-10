type HintProps = {
  hints: Array<{ word: string; relevance: string }>
}

export const Hint: React.FC<HintProps> = ({ hints }) => {
  if (hints.length > 0) {
    const hintsItems: Array<JSX.Element> = hints.map(hint => (
      <span
        className="md:p-6 badge badge-lg badge-primary badge-outline ml-4 mb-2 md:text-xl"
        key={hint.word}
      >
        {hint.word}
      </span>
    ))
    return <div>{hintsItems}</div>
  } else {
    return <div></div>
  }
}
