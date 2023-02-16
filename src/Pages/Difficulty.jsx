import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/difficulty.css'
import Landing from '../Pages/Landing'
import tampa from '../Images/tampa.png'
import orlando from '../Images/orlando.png'
import miami from '../Images/miami.png'

export default function Difficulty() {

    let navigate = useNavigate()
    const [difficulty, setDiff] = useState('')

    const setDifficulty = (e) => {
        setDiff(e.currentTarget.getAttribute('data-value'))
        localStorage.setItem('difficulty', difficulty)
        navigate('/trivia')
    }
  return (
    <div>
        <Landing />
    <div className="difficulty">
        <div onClick={setDifficulty} className="diffLevel" data-value={'Easy'}>
            <h2 className="diffHeaders">Easy</h2>
            <img src={tampa} alt="tampa vintage poster" />
        </div>
        <div onClick={setDifficulty} className="diffLevel" data-value={'Medium'}>
            <h2 className="diffHeaders">Medium</h2>
            <img onClick={setDifficulty} src={orlando} alt="orlando vintage poster" value="Medium"/>
        </div>
        <div onClick={setDifficulty} className="diffLevel" data-value={'Hard'}>
            <h2 className="diffHeaders">Hard</h2>
            <img onClick={setDifficulty} src={miami} alt="miami vintage poster" value="Hard"/>
        </div>
    </div>
    </div>
  )
}
