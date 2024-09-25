import React, { useState } from 'react';
import './demande.css';

function Demande() {
    const [isRtl, setIsRtl] = useState(false);

    const handleLanguageChange = () => {
        setIsRtl(!isRtl);
    };

    return (
        <div className={`container-fluid ${isRtl ? 'rtl' : ''}`} id="mainContainer">
            <div className="row">
                
                <div className="col-md-3 side-menu">
                    <img
                        src="https://www.dreamjob.ma/wp-content/uploads/2023/12/Asd.ma-1.png"
                        alt="Logo"
                        className="img-fluid mb-4"
                    />
                    <h2 id="title">Demande de bénéfice</h2>
                    {[1, 2, 3, 4, 5].map(step => (
                        <div className="step" key={step} id={`step${step}`}>
                            <div className="number">{step}</div>
                            <div className="title">{`Étape ${step}`}</div>
                        </div>
                    ))}
                </div>

                {/* Main form section */}
                <div className="col-md-9">
                    <div className="header">
                        <a href='/'>
                            <button className="btn btn-outline-secondary" id="homeButton">
                                Page d'accueil
                            </button>
                        </a>
                        <button className="btn btn-outline-secondary" id="langButton" onClick={handleLanguageChange}>
                            {isRtl ? 'FR' : 'AR'}
                        </button>
                    </div>

                    <div className="form-section">
                        <h3 id="formTitle">
                            {isRtl
                                ? 'للتقدم بطلب للحصول على المساعدات الاجتماعية المباشرة'
                                : 'Pour soumettre une demande de bénéfice des Aides Sociales Directes'}
                        </h3>
                        <p id="formDescription">
                            {isRtl
                                ? 'يرجى تقديم المعلومات التالية:'
                                : 'Veuillez renseigner les informations suivantes :'}
                        </p>

                        {/* Genre buttons */}
                        <div className="btn-gender mb-4">
                            <button className="btn btn-outline-secondary" id="btnFemale">
                                {isRtl ? 'أنثى' : 'Féminin'}
                            </button>
                            <button className="btn btn-outline-secondary" id="btnMale">
                                {isRtl ? 'ذكر' : 'Masculin'}
                            </button>
                        </div>

                      
                        <form>
                            <div className="mb-3">
                                <label htmlFor="cnie" className="form-label">
                                    Carte nationale d'identité électronique (CNIE) *
                                </label>
                                <input type="text" className="form-control" id="cnie" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="idcs" className="form-label">
                                    Identifiant Digital Civil et Social (IDCS) *
                                </label>
                                <input type="text" className="form-control" id="idcs" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dob" className="form-label">
                                    Date de naissance *
                                </label>
                                <input type="date" className="form-control" id="dob" required />
                            </div>

                            
                            <div className="captcha">
                                <img src="captcha.png" alt="Captcha" />
                                <input type="text" className="form-control" placeholder="Code captcha" />
                            </div>
                        </form>

                        <p className="text-muted mt-3">* Champs obligatoires</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demande;
