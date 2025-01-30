import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Register from './Components/CreateAccount.jsx';
import MainPage from './Components/MainPage.jsx';
import CreatePlane from './Components/CreatePlane.jsx';

//ESTA FUNCION ES APRA NAVEGAR ENTRE COMPONENTES UTILIZANDO REACT-ROUTER-DOOM
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/createPlane" element={<CreatePlane />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
