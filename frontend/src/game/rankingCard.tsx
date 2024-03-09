import React from 'react';

interface Props {
  texts: string[];
}

const RankingCard: React.FC = () => {
  return (
    <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">name</div> {/*name*/}
              {/* <div className="text-sm opacity-50">United States</div> */}
            </div>
          </div>
        </td>
        <td>
          得点
          {/* <br/> */}
          {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
        </td>
        {/* <td>Purple</td> */}
        {/* <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th> */}
      </tr>
  );
};

export default RankingCard;