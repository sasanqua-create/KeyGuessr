import React from 'react'

const RankingCard = ({ ranker }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-6">
          <div className="avatar">
            <div className="mask mask-squircle w-10 h-10">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="">{ranker.user}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-semibold text-lg">{ranker.score_time}</span>
      </td>
    </tr>
  )
}

export default RankingCard
