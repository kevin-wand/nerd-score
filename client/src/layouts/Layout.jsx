import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/OnePage.css'

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className='layout-container'>
      <header>
        <div className='logo-container'>
          <img className="nerd-logo" src='https://i.imgur.com/hSc7opW.jpg' alt='Nerd Score' />
        </div>
        <div className='dropdown-container'>
          <div className='user-welcome-container'>
            {currentUser ? (
              <div>
                <p>{currentUser.username}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <Link to='/login'>Login</Link>
            )}
          </div>
          <div className='hamburger'>
            <i className='fas fa-bars fa-2x'></i>
            <ul>
              <li><Link to='/'>Home Page</Link></li>
              <li><Link to='/categories'>Pick a Quiz</Link></li>
              <li><Link to='/'>Leaderboard</Link></li>
              <li><Link to='/questions'>Quiz Pool</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
            </ul>
          </div>
        </div>
      </header>
      {props.children}
    </div>
  );
}
