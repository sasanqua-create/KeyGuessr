import { auth, provider } from '../auth/firebase'
import type { UserApp } from '../interface/user'
import { PlayPage } from './play'
import { ResultPage } from './result'
import { useAuthState } from 'react-firebase-hooks/auth'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const GamePage: React.FC = () => {
  const [user] = useAuthState(auth)
  const constTrue = true
  const [hints, setHint] = useState([])
  const [ans, setAns] = useState('')
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/api/game/?level=1&genre=1`)
      .then(response => {
        setHint(response.data.words)
        setAns(response.data.ans)
      })
  }, [])
  if (!user) {
    return <div></div>
  }
  const pts: Array<UserApp> = [
    { displayName: user.displayName, photoURL: user.photoURL! },
  ]
  if (constTrue) {
    return <PlayPage hints={hints} pts={pts} />
  } else {
    return (
      <ResultPage
        ans={ans}
        pts={pts}
        hints={hints}
        user={{ displayName: user.displayName, photoURL: user.photoURL! }}
      />
    )
  }
}
