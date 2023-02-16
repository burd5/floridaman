import React from 'react'
import ScoreHeader from './ScoreHeader'
import '../Styles/triviaform.css'

export default function Trivia() {
  return (
    <div>
        <ScoreHeader />
        <div className="triviaForm">
          <div className="pregameInstructions">
            <p>Read the news headline and decide which state it came from. You will have ten seconds to choose an answer. The timer will be in the top right hand corner. The game is over after three wrong answers.</p>
            <button>PLAY</button>
            <form action=""></form>
          </div>
        </div>
    </div>
  )
}

// things to add - add timer in top right, add modal that asks if user wants to leave game, add modal for username error length