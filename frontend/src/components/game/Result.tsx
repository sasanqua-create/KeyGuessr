import type { User } from '../../interface/user'
export const Result: React.FC<{ ans: string; user: User }> = ({
  ans,
  user,
}) => {
  return (
    <div className="h-96 w-full max-w-2xl border-2 border-primary rounded-lg p-3">
      <div className="h-1/4">
        <div className="flex">
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user.photoURL!} />
            </div>
          </div>
          <div className="ml-6 text-xl flex items-center justify-center">
            {user.displayName}
          </div>
        </div>
      </div>
      <div className="h-3/4 flex items-center justify-center">
        <div className="text-5xl">{ans}</div>
      </div>
    </div>
  )
}
