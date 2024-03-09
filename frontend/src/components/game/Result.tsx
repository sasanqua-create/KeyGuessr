export const Result: React.FC = () => {
  return (
    <div className="h-96 w-full max-w-2xl border-2 border-primary rounded-lg p-3">
      <div className="h-1/4">
        <div className="flex">
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="ml-6 text-xl flex items-center justify-center">
            ここにユーザー名
          </div>
        </div>
      </div>
      <div className="h-3/4 flex items-center justify-center">
        <div className="text-5xl">答え</div>
      </div>
    </div>
  )
}
