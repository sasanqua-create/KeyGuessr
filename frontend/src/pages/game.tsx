import { PlayPage } from './play'
import { ResultPage } from './result'

export const GamePage: React.FC = () => {
  const constTrue = false
  if (constTrue) {
    return <PlayPage />
  } else {
    return <ResultPage />
  }
}
