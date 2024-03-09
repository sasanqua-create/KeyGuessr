export const Hint = ({ hints = [] }) => {
  return (
    <div>
      {(function () {
        const list = []
        for (let i = 0; i < hints.lenght; i++) {
          list.push(<li>{i}</li>)
        }
        return <div>{list}</div>
      })()}
    </div>
  )
}
