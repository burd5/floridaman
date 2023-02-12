import React, {useState} from 'react'
import '../Styles/landing.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import tree from '../Images/retrotrees2.jpeg'

export default function Landing() {

    const [modalInfo, setModalInfo] = useState(false)

    const displayInstructions = () => {
        setModalInfo(true)
    }
    const handleClose = () => setModalInfo(false);


  return (
    <div>
        <header className="header">
            <img className="treeIcon" src={tree} alt="palm tree" />
            <h1 className="title">Florida Man</h1>
            <div>
                <span onClick={displayInstructions} className="headerIcons"><i className="fa-solid fa-circle-info"></i></span>
                <span className="headerIcons"><i className="fa-solid fa-chart-simple"></i></span>
            </div>
        </header>

        <Modal
        open={modalInfo}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box>
        <div className="modal">
            <h1 className="instructions">Instructions</h1>
            <ul className='rulesList'>
                <li className="ruleItems">Choose the state that the news headline is from</li>
                <li className="ruleItems">Players can choose between 3 difficulty levels</li>
                <li className="ruleItems">After three wrong answers, the game is over</li>
                <li className="ruleItems">Click on the palm tree to view the leaderboards and the bar graph to view analytics for specific questions</li>
            </ul>
        </div>
        </Box>
        </Modal>

</div>
  )
}
