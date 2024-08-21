import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Para mostrar errores
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    debugger
    // Hacer petición al backend
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      // Si el login es exitoso, redirige al componente deseado
      navigate('/mainPage');
    } else {
      // Si el login falla, muestra el mensaje de error
      setErrorMessage('Invalid email or password');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px', borderRadius: '15px', backgroundColor: '#e9ecef' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4" style={{ color: '#495057' }}>Login</h2>
          {errorMessage && (
            <div className="alert alert-danger text-center" role="alert" style={{ borderRadius: '10px' }}>
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: '#343a40' }}>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: '#343a40' }}>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderRadius: '10px' }}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2" style={{ backgroundColor: '#20c997', borderRadius: '10px', border: 'none' }}>
              Login
            </button>
            <button type="button" className="btn btn-secondary w-100" onClick={handleRegisterRedirect} style={{ borderRadius: '10px' }}>
              Create an account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
