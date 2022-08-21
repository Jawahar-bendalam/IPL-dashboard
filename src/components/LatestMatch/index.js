// Write your code here
import './index.css'

const LatestMatch = props => {
  const {detail} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = detail

  return (
    <div className="latest-match-card-container">
      <h1 className="latest-match-heading">Latest Match</h1>
      <div className="latest-match-card">
        <div className="latest-match-logo-container">
          <div className="latest-match-details-main">
            <h1 className="latest-match-team-name"> {competingTeam} </h1>
            <p className="latest-match-date"> {date} </p>
            <p className="latest-match-venue"> {venue} </p>
            <p className="latest-match-status"> {result} </p>
          </div>
          <img
            className="latest-match-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="latest-match-details-info">
          <div className="match-info-item">
            <p className="latest-match-details-label"> First Innings </p>
            <p className="latest-match-details-value"> {firstInnings} </p>
          </div>
          <div className="match-info-item">
            <p className="latest-match-details-label"> Second Innings </p>
            <p className="latest-match-details-value"> {secondInnings} </p>
          </div>
          <div className="match-info-item">
            <p className="latest-match-details-label"> Man of The Match </p>
            <p className="latest-match-details-value"> {manOfTheMatch} </p>
          </div>
          <div className="match-info-item">
            <p className="latest-match-details-label"> Umpires </p>
            <p className="latest-match-details-value"> {umpires} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch