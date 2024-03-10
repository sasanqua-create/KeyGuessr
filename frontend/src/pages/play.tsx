import { Hint } from '../components/game/Hint'
import { Answer } from '../components/game/Answer'
import { Question } from '../components/game/Question'
import Participants from '../components/game/participants.js'
import type { UserApp } from '../interface/user'

type PlayProps = {
  pts: Array<UserApp>
  hints: Array<{ word: string; relevance: string }>
}

export const PlayPage: React.FC<PlayProps> = ({ hints, pts }) => {
  return (
    <div className="h-full flex-1">
      <div className="h-1/6">
        <Hint hints={hints} />
      </div>
      <div className="h-2/3 flex items-center justify-center">
        <Question lasthint={hints.slice(-1)[0]} />
      </div>
      <div className="h-1/6 flex items-center justify-center">
        <div className="w-1/4">
          <Participants participantlist={pts} />
        </div>
        <div className="w-1/2">
          <Answer />
        </div>
        <div className="w-1/4"></div>
      </div>
    </div>
  )
}
