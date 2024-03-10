export const Question: React.FC<{
  lasthint: { word: string; relevance: string }
}> = ({ lasthint }) => {
  if (lasthint) {
    return (
      <div className="h-96 w-1/2 border-2 border-primary rounded-lg p-3">
        <div className="h-full flex items-center justify-center">
          <div className="text-5xl">{lasthint?.word}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="h-96 w-1/2 border-2 border-primary rounded-lg p-3">
        <div className="h-full flex items-center justify-center">
          <span className="loading loading-dots loading-lg text-primary m-4"></span>
          <div className="text-5xl">問題を作成しています...</div>
        </div>
      </div>
    )
  }
}
