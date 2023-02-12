import React, {useState} from 'react'
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
            <h1 className="title">Florida Man</h1>
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
                <li className="ruleItems">Read the news headline and decide which US state it originated from</li>
                <li className="ruleItems">Choose your difficulty level - easy, medium, or hard</li>
                <li className="ruleItems">After three wrong answers, the game is over</li>
                <li className="ruleItems">Click on the palm tree to view the leaderboards and the bar graph to view analytics for specific questions</li>
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
