import React, { useState } from 'react';
import './recours.css';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Recours = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="containerN">
            <header className="header">
                <div className="logo">
                    <img src="https://www.dreamjob.ma/wp-content/uploads/2023/12/Asd.ma-1.png" alt="Logo" />
                    <div className="separator"></div>
                    <h1>Aide Sociale Directe</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#">Recours</a></li>
                    </ul>
                    <NavLink  to="/gg"><a href="#" className="login-button">
                         <i className="fas fa-sign-out-alt"></i> Se déconnecter
                    </a></NavLink>
                </nav>
            </header>

            <main className="main">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 10
                    }}
                >
                    <h2 className="title-recours">Mes demandes de recours</h2>
                    <NavLink to="/kk" style={{ textDecoration: "none" }}>
                        <button className="add-button button">Ajouter une demande de recours</button>
                    </NavLink>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Date de la demande</th>
                            <th>Nature de l'aide</th>
                            <th>Titre</th>
                            <th>Situation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>25/04/2024</td>
                            <td>Allocation Mensuelle<br />N° 562172</td>
                            <td>Recours</td>
                            <td>Demande de recours annulée</td>
                            <td><button className="button" onClick={handleShowModal}>Voir le détail</button></td>
                        </tr>
                        <tr>
                            <td>24/04/2024</td>
                            <td>Aide Forfaitaire<br />N° 5095126</td>
                            <td>Recours</td>
                            <td>Demande de recours annulée</td>
                            <td><button className="button" onClick={handleShowModal}>Voir le détail</button></td>
                        </tr>
                        <tr>
                            <td>09/07/2024</td>
                            <td>Allocation Mensuelle<br />N° 562172</td>
                            <td>Test</td>
                            <td>Demande de recours annulée</td>
                            <td><button className="button" onClick={handleShowModal}>Voir le détail</button></td>
                        </tr>
                    </tbody>
                </table>

                {/* Modal */}
                {showModal && (
                    <div className="modal show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Détails de la demande</h5>
                                    <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Type d'aide</label>
                                        <input type="text" className="form-control" value="Allocation Mensuelle" readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label>Adresse e-mail</label>
                                        <input type="email" className="form-control" value="test@gmail.com" readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label>Adresse</label>
                                        <input type="text" className="form-control" value="TEST" readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label>Réclamation</label>
                                        <input type="text" className="form-control" value="Test" readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label>Statut de la demande</label>
                                        <input type="text" className="form-control" value="Refusée" readOnly />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Fermer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Recours;
