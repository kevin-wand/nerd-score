import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import './App.css';
import MainContainer from './containers/MainContainer';
import Layout from './layouts/Layout';
import Footer from './layouts/Footer';
import Login from './screens/Login';
import Register from './screens/Register';
import {
	loginUser,
	registerUser,
	removeToken,
	verifyUser,
} from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
	const history = useHistory();

	useEffect(() => {
		const handleVerify = async () => {
			const userData = await verifyUser();
			setCurrentUser(userData);
		};
		handleVerify();
	}, []);

	const handleLogin = async (formData) => {
		const userData = await loginUser(formData);
		setCurrentUser(userData);
		history.push('/');
	};

	const handleRegister = async (formData) => {
		const userData = await registerUser(formData);
		setCurrentUser(userData);
		history.push('/');
	};

	const handleLogout = () => {
		setCurrentUser(null);
		localStorage.removeItem('authToken');
		removeToken();
		history.push('/');
	};


  return (
    <div className='wrapper'>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
						<Register handleRegister={handleRegister} />
					</Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
      <br />
      <Footer />
    </div>
  );
}

export default App;
