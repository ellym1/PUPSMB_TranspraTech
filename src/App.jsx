import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';
import TopNavbar from './components/Nav/TopNavbar';
import MainPage from './components/MainPage';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <Router>
      <div className="App">
        <TopNavbar handleLoginClick={handleLoginClick} />
        <Routes>
          <Route path="/" element={<MainPage handleLoginClick={handleLoginClick} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {showLogin && <LogIn handleClose={handleCloseLogin} />}
      </div>
    </Router>
  );
}

export default App;

