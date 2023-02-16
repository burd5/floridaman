import React from 'react'
import '../Styles/scoreheader.css'
import tree from '../Images/gator.jpeg'
import { Link } from 'react-router-dom'

export default function ScoreHeader() {

    const player = localStorage.getItem('user')
    const difficulty = localStorage.getItem('difficulty')

    const goHome = () => {

    }

  return (

    <div className="scoreheader">
        <div className="headerItems">
            <ul className="scoreItems">
                <li>
                    <Link to={'/'}>
                    <img onClick={goHome} className="homeIcon" src={tree} alt="palm tree" />
                    </Link>
                </li>
                <li><span>Player:</span> {player}</li>
                <li><span>Difficulty:</span> {difficulty}</li>
                <li><span>Score:</span> 0</li>
                <li style={{color: 'red'}}><span>Strikes:</span> 0</li>
            </ul>
        </div>
        <div className="triviaForm">
            <p>Read the News headline and decide which state it came from</p>
            <form action=""></form>
        </div>
    </div>
  )
}
