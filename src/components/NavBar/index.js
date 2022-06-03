// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, isGameInProgress, currentScore} = props

  return (
    <nav className="NavBar-cont">
      <div className="title-logo-score-cont">
        <div className="title-logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p>score: {currentScore}</p>
            <p>Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
