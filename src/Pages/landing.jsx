import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/landing.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import tree from '../Images/favicon.jpeg'

export default function Landing() {

    const [modalInfo, setModalInfo] = useState(false)
    const [modalLeaderboard, setModalLeaderboard] = useState(false)
    const [modalAnalytics, setModalAnalytics] = useState(false)

    const displayInstructions = () => {
        setModalInfo(true)
    }
    const closeInfo = () => setModalInfo(false);

    const displayLeaderboard = () => {
        setModalLeaderboard(true)
    }
    const closeLeader = () => setModalLeaderboard(false);

    const displayAnalytics = () => {
        setModalAnalytics(true)
    }
    const closeAnalytics = () => setModalAnalytics(false);


  return (
    <div>
        <header className="header">
            <img onClick={displayLeaderboard} className="treeIcon" src={tree} alt="palm tree" />
            <Link className="link" to={'/'}>
                <h1 className="title">Florida Man</h1>
            </Link>
            <div>
                <i onClick={displayInstructions} className="infoIcon fa-solid fa-circle-info"></i>
                <i onClick={displayAnalytics}className="analyticsIcon fa-solid fa-chart-simple"></i>
            </div>
        </header>

        <Modal
        open={modalInfo}
        onClose={closeInfo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box>
        <div className="modal">
            <h1 className="instructions">Instructions</h1>
            <ul className='rulesList'>
                <li className="ruleItems">Click on <img onClick={displayLeaderboard} className="treeListIcon" src={tree} alt="palm tree" /> to view the leaderboards</li>
                <li className="ruleItems">Click on <i onClick={displayAnalytics}className="analyticsListIcon fa-solid fa-chart-simple"></i> to view analytics for specific questions</li>
                <li className="ruleItems">To begin a game, enter a player name and hit start</li> 
                <li className="ruleItems">Choose a difficulty level - Easy, Medium, or Hard</li> 
                <li className="ruleItems">Guess which state the news headline is from</li>
                <li className="ruleItems">Players have 10 seconds to guess</li> 
                <li className="ruleItems">After three wrong answers, the game is over</li>
            </ul>
        </div>
        </Box>
        </Modal>

        <Modal
        open={modalLeaderboard}
        onClose={closeLeader}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box>
        <div className="modal">
            <h1 className="instructions">Leaderboard</h1>
            
        </div>
        </Box>
        </Modal>

        <Modal
        open={modalAnalytics}
        onClose={closeAnalytics}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box>
        <div className="modal">
            <h1 className="instructions">Analytics</h1>
            
        </div>
        </Box>
        </Modal>

</div>
  )
}
