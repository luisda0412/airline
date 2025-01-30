import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePlane = () => {
    //STATE CON LA INFORMACION DEL USUARIO
  const [formData, setFormData] = useState({
    id: '',
    year: '',
    model: '',
    brand: '',
    passagerAmount: '',
    rowAmount: '',
    seatAmount: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/api/registerPlane', formData);
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
            <h2 className="text-center mb-4" style={{ color: '#495057' }}>Create Plane</h2>
            {errorMessage && (
              <div className="alert alert-danger text-center" role="alert" style={{ borderRadius: '10px' }}>
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label" style={{ color: '#343a40' }}>ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="year" className="form-label" style={{ color: '#343a40' }}>Year</label>
                <input
                  type="number"
                  className="form-control"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="model" className="form-label" style={{ color: '#343a40' }}>Model</label>
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="brand" className="form-label" style={{ color: '#343a40' }}>Brand</label>
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="passagerAmount" className="form-label" style={{ color: '#343a40' }}>Passager Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="passagerAmount"
                  name="passagerAmount"
                  value={formData.passagerAmount}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rowAmount" className="form-label" style={{ color: '#343a40' }}>Row Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="rowAmount"
                  name="rowAmount"
                  value={formData.rowAmount}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="seatAmount" className="form-label" style={{ color: '#343a40' }}>Seat Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="seatAmount"
                  name="seatAmount"
                  value={formData.seatAmount}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-2" style={{ backgroundColor: '#20c997', borderRadius: '10px', border: 'none' }}>
                Create plane
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
}

export default CreatePlane
