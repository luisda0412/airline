import React from 'react';

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Banner Slider */}
      <div id="bannerSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='../assets/images/aaaaa.png' className="d-block w-100" alt="Ruta con descuento 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Destino 1</h5>
              <p>Descripción del destino con descuento.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src='../assets/images/lmfao.jpg' className="d-block w-100" alt="Ruta con descuento 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Destino 2</h5>
              <p>Otra descripción para este destino.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#bannerSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Sección informativa */}
      <div className="info-section mt-4">
        <h2>Sobre Nosotros</h2>
        <p>
          Conoce más sobre nuestra empresa, nuestra historia y cómo trabajamos para ofrecerte el mejor servicio de vuelos.
        </p>
      </div>

      {/* Formulario de búsqueda de vuelos */}
      <div className="flight-search mt-4">
        <h2>Buscar Vuelos</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="flightType" className="form-label">Tipo de vuelo</label>
            <select id="flightType" className="form-select">
              <option value="one-way">Solo ida</option>
              <option value="round-trip">Ida y regreso</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="origin" className="form-label">Origen</label>
            <input type="text" id="origin" className="form-control" placeholder="Ciudad de origen" />
          </div>
          <div className="mb-3">
            <label htmlFor="destination" className="form-label">Destino</label>
            <input type="text" id="destination" className="form-control" placeholder="Ciudad de destino" />
          </div>
          <div className="mb-3">
            <label htmlFor="departureDate" className="form-label">Fecha de ida</label>
            <input type="date" id="departureDate" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="returnDate" className="form-label">Fecha de regreso</label>
            <input type="date" id="returnDate" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Buscar vuelos</button>
        </form>
      </div>

      {/* Sección de contacto */}
      <div className="contact-section mt-4">
        <h2>Contáctenos</h2>
        <p>Si tienes preguntas o necesitas ayuda, no dudes en contactarnos. Estamos aquí para ti.</p>
        <p>Email: contacto@empresa.com | Teléfono: +506 1234-5678</p>
      </div>
    </div>
  );
};

export default MainPage;
