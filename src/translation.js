import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Demande from './demande'; // Assurez-vous que ce chemin est correct
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="https://static.yabiladi.com/files/articles/31f2f30cbfca2d4f1004794f03ccf36c_thumb_565.jpg" alt="Logo" width="150" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" data-translate="home">
                    <i className="fas fa-home"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Home</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>الرئيسية</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="socialSupportDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-translate="socialAssistance">
                    <i className="fas fa-hand-holding-heart"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Direct Social Support</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>الدعم الاجتماعي المباشر</span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="socialSupportDropdown">
                    <li><a className="dropdown-item" href="#" data-translate="faq"><i className="fas fa-question-circle"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>FAQ</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>الأسئلة المتكررة</span></a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="exceptionalSupportDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-translate="exceptionalAssistance">
                    <i className="fas fa-star"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Additional Exceptional Social Support</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>الدعم الاجتماعي الاستثنائي الإضافي</span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="exceptionalSupportDropdown">
                    <li><a className="dropdown-item" href="#" data-translate="legalTexts"><i className="fas fa-file-alt"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Legal Texts</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>النصوص القانونية</span></a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-secondary mx-2" id="languageToggle" onClick={toggleLanguage}><i className="fas fa-globe"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}> عربي</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}> Français</span></button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger mx-2"><i className="fas fa-user-shield"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Private Space</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}> الفضاء الخاص</span></button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-success mx-2"><i className="fas fa-calendar-alt"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Court Schedule</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}> جدول المحاكمة</span></button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="video-wrapper">
                <iframe src="https://www.youtube.com/embed/pIDCSY7HjAQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="buttons mt-3">
                <Link to="/demande">
                  <button className="btn btn-warning btn-lg" data-translate="applyBenefit"><i className="fas fa-apply"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>demande de benifice </span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>تقديم طلب الاستفادة</span></button>
                </Link>
                <a href="https://www.asd.ma/documents/circonscriptions-sanitaires.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-success btn-lg" data-translate="healthCenters">
                    <i className="fas fa-hospital"></i>
                    <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>List of Districts and Health Centers</span>
                    <span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>قائمة الأحياء والمراكز الصحية</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://www.asd.ma/assets/carousel172392.jpg" className="d-block w-100" alt="Support Image 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://www.asd.ma/assets/carousel572392.jpg" className="d-block w-100" alt="Support Image 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://www.asd.ma/assets/carousel172293.jpg" className="d-block w-100" alt="Support Image 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/demande" element={<Demande />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
