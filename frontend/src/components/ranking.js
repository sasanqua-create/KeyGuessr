import React from 'react';
import RankingCard from './rankingCard';

const Ranking = ({ rankerlist }) => {
  return (
    <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
        <RankingCard ranker={"name"} />
    </thead> 
    <tbody>
      {rankerlist.map((ranker, index) => (
        <RankingCard key={index} ranker={ranker} />
      ))}
    </tbody> 
    <tfoot>
      <RankingCard ranker={"name"} />
    </tfoot>
  </table>
</div>
  );
};

export default Ranking;