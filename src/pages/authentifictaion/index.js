import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './authentification.css';

const Authentification = () => {
  const [idcs, setIdcs] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    setIdcs(e.target.value);
    setIsButtonDisabled(e.target.value === ''); // Disable button if input is empty
  };

  return (
    <div className="container-fluid">
      <div className="card-left"></div>

      <div className="form-container">
        <form>
          <div className="mb-3">
            <label htmlFor="idcs" className="form-label">
              Identifiant Digital Civil et Social (IDCS) <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="idcs"
              placeholder="Entrez votre IDCS"
              value={idcs}
              onChange={handleInputChange}
              required
            />
            <small className="form-text text-muted">* Champs obligatoires</small>
          </div>

          <div className="d-grid mb-3">
            <a href="/pp">
              <button
                type="submit"
                className="btn btn-primary" // Button now has your custom styling
                disabled={isButtonDisabled}
              >
                Me connecter
              </button>
            </a>
          </div>

          <div className="text-center">
            <a href="#" className="footer-link">
              Vous n'avez pas encore de compte ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authentification;
