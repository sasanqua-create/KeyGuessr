import { Play } from './play'
import { Result } from './result'

export const Game: React.FC = () => {
  const constTrue = true
  if (constTrue) {
    return <Play />
  } else {
    return <Result />
  }
}
