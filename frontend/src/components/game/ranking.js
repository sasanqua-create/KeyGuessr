import React from 'react'
import RankingCard from './rankingCard'

const Ranking = ({ rankerlist }) => {
  if (rankerlist.length > 0) {
    return (
      <div className="h-96">
        <div className=" font-semibold mb-3">
          <div className="text-2xl text-primary">Ranking</div>
          <div className="mt-3 text-xs">Category: ハッカソン</div>
        </div>
        <div className="overflow-y-auto">
          <table className="table table-pin-rows table-pin-cols">
            <tbody>
              {rankerlist.map((ranker, index) => (
                <RankingCard key={index} ranker={ranker} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Ranking
