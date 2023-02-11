import React from 'react'
import '../Styles/landing.css'
import tree from '../Images/palmtree.jpeg'

export default function landing() {
  return (
    <div className="landingBody">
        <header className="header">
            <img className="treeIcon" src={tree} alt="palm tree" />
            <h1 className="title">Florida Man</h1>
            <div>
                <span className="headerIcons"><i className="fa-solid fa-circle-info"></i></span>
                <span className="headerIcons"><i className="fa-solid fa-chart-simple"></i></span>
            </div>
        </header>
    </div>
  )
}
