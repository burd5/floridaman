import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/username.css'
import gator from '../Images/gator.jpeg'

export default function Username() {

  let navigate = useNavigate()
  const [username, setUsername] = useState('')

  const setUser = (e) => {
    setUsername(e.target.value)
  }
  const storeUsername = () => {
    if(username.length < 1){
      alert('Username must be at least one character')
    } else {
      localStorage.setItem('user', username)
      navigate('/difficulty')
    }
  }


  return (
    <div className="username">
        <div className="scroll">
          <div className="m-scroll">
            <span><img className="gatorIcon" src={gator} alt="" /></span>
            <span>FLORIDA MAN FOUND WITH DRUGS AFTER GETTING TRAPPED IN PORT-A-POTTY</span>
            <span><img className="gatorIcon" src={gator} alt="" /></span>
            <span className="blueU">AFTER POLICE CHASE, FLORIDA WOMAN CROSSES 'GETTING ARRESTED' OFF BUCKET LIST, DEPUTIES SAY</span>
            <span><img className="gatorIcon" src={gator} alt="" /></span>
            <span>FLORIDA MAN CHARGED FOR THROWING HOT DOG AT ST. PETE POLICE OFFICER</span>
            <span><img className="gatorIcon" src={gator} alt="" /></span>
            <span className="blueU">FLORIDA MAN DRIVES STOLEN TRUCK TO SPACE FORCE BASE TO WARN OF BATTLE BETWEEN ALIENS, DRAGONS</span>
            <span><img className="gatorIcon" src={gator} alt="" /></span>
            <span>DEPUTIES RELEASE VIDEO OF FLORIDA WOMAN IRISH FOLK DANCING DURING SOBRIETY TESTS</span>
            <span><img className="gatorIcon" src={gator} alt="" /></span>
            <span className="blueU">FLORIDA MAN WEARING NOTHING BUT COWBOY HAT ATTACKS WOMAN WITH MACHETE</span>
            <span><img className="gatorIcon" src={gator} alt="" /></span>
            <span>FLORIDA WOMAN SPEEDS THROUGH CHECKPOINT, TAKES SELFIE DURING TRAFFIC STOP</span>
            <span><img className="gatorIcon" src={gator} alt="" /></span>
            <span className="blueU">FLORIDA MAN CHARGED WITH ASSAULT WITH A DEADLY WEAPON AFTER THROWING ALLIGATOR THROUGH WENDY'S DRIVE-THRU WINDOW</span>
            <span><img className="gatorIcon" src={gator} alt="" /></span>
            <span>FLORIDA COP CLAIMS BURGER KING PUT DIRT ON HIS FOOD - INVESTIGATION REVEALS IT WAS SEASONING </span>
            <span><img className="gatorIcon" src={gator} alt="" /></span>
            <span className="blueU">FLORIDA MEN USE SPAGHETTI SAUCE IN BURGLARY PLOT </span>
            <span><img className="gatorIcon" src={gator} alt="" /></span>
          </div>
        </div>
        <form className="userForm" action="">
          <label htmlFor="">Enter a player name to continue</label>
          <input type="text" onChange={setUser}/>
          <button onClick={storeUsername}>START</button>
        </form>
    </div>
  )
}
