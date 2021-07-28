import { Link } from 'react-router-dom'
import React from 'react'
import '../assets/OnePage.css'

export default function Home() {
  return (
    <>
      <div className='main-option-container'>
        <div className='welcome-tag'>Test your inner nerd</div>
        <div className='main-option main-quiz'><Link to='/categories' className='main-link'>Pick a quiz</Link></div>
        <div className='main-option main-leader'><Link to='/' className='main-link'>Leaderboard</Link></div>
        <div className='main-option main-register'><Link to='/register' className='main-link'>Register</Link></div>
      </div>
      <br />
      <div className='home-tag'>Sign-up and track your score! Get on the leaderboard to unlock the ability to add questions and raise the difficulty!</div>
    </>
  )
}
