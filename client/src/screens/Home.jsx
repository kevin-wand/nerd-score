import { Link } from 'react-router-dom'
import React from 'react'
import '../assets/OnePage.css'

export default function Home() {
  return (
    <div>
      <div className='welcome-tag'>Test your inner nerd</div>
      <br />
      <div className='main-option-container'>
        <div className='main-option main-quiz'><Link to='/categories'>Pick a quiz</Link></div>
        <div className='main-option main-leader'><Link to='/'>Leaderboard</Link></div>
        <div className='main-option main-register'><Link to='/register'>Register</Link></div>
      </div>
    </div>
  )
}
