import { Hint } from '../components/game/Hint'
import { Answer } from '../components/game/Answer'

export const Game: React.FC = () => {
  return (
    <div className="h-full flex-1">
      <div className="h-1/6">
        <Hint hints={['ヒント1', 'ヒント2']} />
      </div>
      <div className="h-2/3"></div>
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
