import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/OnePage.css'

export default function Layout(props) {
  const [showNav, setShowNav] = useState(false)
  const { currentUser, handleLogout } = props;

  function toggleNav() {
    setShowNav(prevState => !prevState);
    console.log(showNav)
  }

  return (
    <div className='layout-container'>
      <header>
        <div className='logo-container'>
          <img className="nerd-logo" src='https://i.imgur.com/hSc7opW.jpg' alt='Nerd Score' />
        </div>
        <div className='user-welcome-container'>
          {currentUser ? (
            <div className='user-verification'>
              <div className='user-signed-in'>Welcome {currentUser.username}!</div>
              <button onClick={handleLogout} className='user-logout'>Logout</button>
            </div>
          ) : (
            <Link to='/login' className='user-login'>Login</Link>
          )}
        </div>
        <i onClick={toggleNav} className={showNav ? 'fas fa-bars fa-2x navbar-true' : 'fas fa-bars fa-2x navbar-false'}></i>
        <div className={showNav ? 'hamburger-true' : 'hamburger-false'}>
          <ul>
            <li><Link to='/'>Home Page</Link></li>
            <li><Link to='/categories'>Pick a Quiz</Link></li>
            <li><Link to='/'>Leaderboard</Link></li>
            <li><Link to='/questions'>Quiz Bank</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
          </ul>
        </div>
      </header>
      {props.children}
    </div >
  );
}
