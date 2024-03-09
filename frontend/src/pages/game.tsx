import { Hint } from '../components/game/Hint'
import { Answer } from '../components/game/Answer'
import { Question } from '../components/game/Question'

export const Game: React.FC = () => {
  return (
    <div className="h-full flex-1">
      <div className="h-1/6">
        <Hint hints={['ヒント1', 'ヒント2','ヒント3','ヒント4','ヒント5']} />
      </div>
      <div className="h-2/3 flex items-center justify-center">
        <Question />
      </div>
      <div className="h-1/6 flex items-center justify-center">
        <div className="w-1/4"></div>
        <div className="w-1/2">
          <Answer />
        </div>
        <div className="w-1/4"></div>
      </div>
    </div>
  )
}
