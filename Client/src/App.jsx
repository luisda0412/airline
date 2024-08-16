import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Register from './Components/CreateAccount.jsx';
import MainPage from './Components/MainPage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mainPage" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
