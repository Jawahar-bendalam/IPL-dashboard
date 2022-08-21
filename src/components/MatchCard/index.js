// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetail} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetail

  return (
    <li className={`match-card ${matchStatus}`}>
      <img
        className="match-card-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <h1 className="match-card-name"> {competingTeam} </h1>
      <p className="match-card-result"> {result} </p>
      <p className="match-status"> {matchStatus} </p>
    </li>
  )
}

export default MatchCard