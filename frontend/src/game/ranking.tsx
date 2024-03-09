import React from 'react';
import RankingCard from './rankingCard';

const Ranking = () => {
  return (
    <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
        <RankingCard />
    </thead> 
    <tbody>
      <RankingCard />
      <RankingCard />
      <RankingCard />
      <RankingCard />
      <RankingCard />
    </tbody> 
    <tfoot>
        <RankingCard />
    </tfoot>
  </table>
</div>
  );
};

export default Ranking;