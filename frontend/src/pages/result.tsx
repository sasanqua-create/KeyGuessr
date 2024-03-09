import { Result } from '../components/game/Result'
import { Hint } from '../components/game/Hint'
import Participants from '../components/game/participants.js'
import Ranking from '../components/game/ranking.js'
import { Link } from 'react-router-dom'

export const ResultPage: React.FC = () => {
  const pts: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k']
  const rankings: Array<string> = [
    'hackathon user1',
    'hackathon user2',
    'hackathon user3',
  ]
  return (
    <div className="h-full flex-1">
      <div className="h-1/6">
        <div className="w-full h-16 mb-6 bg-primary text-white text-3xl italic flex items-center justify-center tracking-widest">
          RESULT
        </div>
        <Hint hints={['ヒント1', 'ヒント2', 'ヒント3', 'ヒント4', 'ヒント5']} />
      </div>
      <div className="h-2/3 flex items-center justify-center">
        <div className="w-1/3 p-6 flex items-center justify-center">
          <Result />
        </div>
        <div className="p-6">
          <Ranking rankerlist={rankings} />
        </div>
      </div>
      <div className="h-1/6 flex items-center justify-center">
        <div className="w-2/3">
          <Participants participantlist={pts} />
        </div>
        <div className="w-1/3 flex">
          <button className="btn btn-primary btn-outline m-2 w-52">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            もう一度チャレンジ
          </button>
          <Link to="/" className="btn btn-primary m-2 w-52">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
