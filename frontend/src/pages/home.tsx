import { Link } from 'react-router-dom'
export const HomePage: React.FC = () => {
  return (
    <div>
      <Link className="btn" to="/game/">
        ゲーム画面への仮リンク
      </Link>
    </div>
  )
}
