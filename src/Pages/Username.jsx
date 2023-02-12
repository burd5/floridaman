import React from 'react'
import '../Styles/username.css'

export default function Username() {
  return (
    <div className="username">
        <form className="userForm" action="">
          <label htmlFor="">Enter a player name to continue</label>
          <input type="text" />
          <button>START</button>
        </form>
    </div>
  )
}
