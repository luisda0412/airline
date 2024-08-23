import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  //STATE CON LA INFORMACION DEL USUARIO
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    lastname: '',
    email: '',
    birthdate: '',
    direction: '',
    phone: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validatePassword = (password) => {
    //EXPRESION QUE VALIDA QUE LA CLAVE TENGA MINIMO 8 LETRAS, 1 MAYUSCULA Y 1 CARACTER ESPECIAL
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //SE VALIDA LA CLAVE
    if (!validatePassword(formData.password)) {
      setErrorMessage('La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);
      console.log(response.data);
      navigate('/'); // Redirige al componente de inicio de sesión
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg p-4" style={{ borderRadius: '15px', backgroundColor: '#e9ecef' }}>
            <h2 className="text-center mb-4" style={{ color: '#495057' }}>Register</h2>
            {errorMessage && (
              <div className="alert alert-danger text-center" role="alert" style={{ borderRadius: '10px' }}>
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label" style={{ color: '#343a40' }}>Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ color: '#343a40' }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ color: '#343a40' }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label" style={{ color: '#343a40' }}>Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="birthdate" className="form-label" style={{ color: '#343a40' }}>Birth date</label>
                <input
                  type="date"
                  className="form-control"
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="direction" className="form-label" style={{ color: '#343a40' }}>Direction</label>
                <input
                  type="text"
                  className="form-control"
                  id="direction"
                  name="direction"
                  value={formData.direction}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label" style={{ color: '#343a40' }}>Phone number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-2" style={{ backgroundColor: '#20c997', borderRadius: '10px', border: 'none' }}>
                Create an account
              </button>
              <button type="button" className="btn btn-secondary w-100" onClick={handleGoBack} style={{ borderRadius: '10px' }}>
              Go back
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
