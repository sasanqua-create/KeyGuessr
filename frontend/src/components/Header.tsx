import { auth, provider } from '../auth/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signInWithPopup, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  const [user, loading, error] = useAuthState(auth)
  const signIn = () => {
    signInWithPopup(auth, provider)
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          アプリ名
        </Link>
      </div>
      <div className="flex-none">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL!} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className=" gap-3 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="p-3">{user.displayName}</li>
              <li>
                <button className="btn" onClick={() => signOut(auth)}>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={signIn}>
            Sign in
          </button>
        )}
      </div>
    </div>
  )
}
