// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatch: {},
    recentMatchesList: [],
    teamBanner: '',
    isLoading: true,
  }

  componentDidMount = () => {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches

    const updatedLatestMD = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const fromattedRM = recentMatches.map(eachItem => ({
      id: eachItem.id,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      result: eachItem.result,
      matchStatus: eachItem.match_status,
    }))

    this.setState({
      teamBanner: teamBannerUrl,
      latestMatch: updatedLatestMD,
      recentMatchesList: fromattedRM,
      isLoading: false,
    })
  }

  render() {
    const {teamBanner, latestMatch, recentMatchesList, isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return isLoading ? (
      <div className={`app-team-matches-container ${id}`}>
        <div testid="loader" className="loader-container">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      </div>
    ) : (
      <div className={`app-team-matches-container ${id}`}>
        <div className="team-matches-container">
          <img className="team-banner" src={teamBanner} alt="team banner" />
          <LatestMatch detail={latestMatch} />
          <ul className="recent-matches-list">
            {recentMatchesList.map(eachItem => (
              <MatchCard key={eachItem.id} matchDetail={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
