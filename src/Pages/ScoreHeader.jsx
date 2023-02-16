import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../Styles/scoreheader.css'
import tree from '../Images/gator.jpeg'


export default function ScoreHeader() {

    let navigate = useNavigate()
    const player = localStorage.getItem('user')
    const difficulty = localStorage.getItem('difficulty')
    const [warning, setWarning] = useState(false)

    const openModal = () => {
        setWarning(true)
    }

    const closeModal = () => {
        setWarning(false)
    }

    const endGame = () => {
        localStorage.clear()
        navigate('/')
    }

  return (

    <div className="scoreheader">
        <div className="headerItems">
            <ul className="scoreItems">
                <li>
                    <img onClick={openModal} className="homeIcon" src={tree} alt="palm tree" />
                </li>
                <li><span>Player:</span> {player}</li>
                <li><span>Difficulty:</span> {difficulty}</li>
                <li><span>Score:</span> 0</li>
                <li style={{color: 'red'}}><span>Strikes:</span> 0</li>
            </ul>
        </div>

        <Modal
        open={warning}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box>
        <div className="warningModal">
            <h5 className="warningTitle">Are you sure you want to exit?</h5>
            <p>Your player and game information will be deleted</p>
            <div className="modalButtons">
                <button onClick={closeModal}>Cancel</button>
                <button onClick={endGame}>Yes</button>
            </div>
        </div>
        </Box>
        </Modal>
    </div>
  )
}
