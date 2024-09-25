import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import demande from './demande';


function Main() {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);

  };

  return (
    <div style={{direction:isArabic ? 'rtl' : 'ltr'}}>

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
                <a className="nav-link" href="#" data-translate="home"><i className="fas fa-home"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Home</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>الرئيسية</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="socialSupportDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-translate="socialAssistance">
                  <i className="fas fa-hand-holding-heart"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Direct Social Support</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>الدعم الاجتماعي المباشر</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="socialSupportDropdown">
                  <li><a className="dropdown-item" href="#" data-translate="faq"><i className="fas fa-question-circle"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Questions fréquemment posées</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>الأسئلة المتكررة</span></a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="exceptionalSupportDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-translate="exceptionalAssistance">
                  <i className="fas fa-star"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Soutien social exceptionnel supplémentaire</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>الدعم الاجتماعي الاستثنائي الإضافي</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="exceptionalSupportDropdown">
                  <li><a className="dropdown-item" href="#" data-translate="legalTexts"><i className="fas fa-file-alt"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Legal Texts</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>النصوص القانونية</span></a></li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-secondary mx-2" id="languageToggle" onClick={toggleLanguage}><i className="fas fa-globe"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}> عربي</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}> Français</span></button>
              </li>
              <li className="nav-item">
                <NavLink to="/login">
                <button className="btn btn-danger mx-2"><i className="fas fa-user-shield"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Private Space</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}> الفضاء الخاص</span></button>
                </NavLink>
                {/* <a href='/login'><button className="btn btn-danger mx-2"><i className="fas fa-user-shield"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Private Space</span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}> الفضاء الخاص</span></button></a> */}
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
              <a href='/demande'><button className="btn btn-warning btn-lg" data-translate="applyBenefit"><i className="fas fa-apply"></i> <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>demande de benifice </span><span className={`text-ar ${isArabic ? 'd-inline' : 'd-none'}`}>تقديم طلب الاستفادة</span></button></a>

              <a href="https://www.asd.ma/documents/circonscriptions-sanitaires.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-success btn-lg" data-translate="healthCenters">
                  <i className="fas fa-hospital"></i>
                  <span className={`text-en ${isArabic ? 'd-none' : 'd-inline'}`}>Liste des Districts et Centres de Santé</span>
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
      <div className="container-custom my-5">
        <div className="d-flex align-items-center">
          <img
            src="https://www.asd.ma/assets/asd_rs72392.png"
            alt="Support Image"
            className="support-image"
          />
          <div className="info ms-4">
            <div className={`content-en ${isArabic ? 'd-none' : 'd-block'}`}>
              <div className="title">Pour bénéficier d’un soutien social direct</div>
              <p>Nous vous invitons à vous inscrire au Registre Social Unifié et à demander une aide via le portail www.asd.ma.</p>
              <p>1 - S'inscrire au Registre Social Unifié (USR) pour bénéficier de l'Aide Sociale Directe (SSD).</p>
              <p>2 - Déposez votre demande d'accompagnement via le portail www.asd.ma.</p>
              <p>3 - Attendez les résultats de l'évaluation de votre candidature et la décision finale.</p>
            </div>
            <div className={`content-ar ${isArabic ? 'd-block' : 'd-none'}`}>
              <div className="title">للاستفادة من الدعم الاجتماعي المباشر</div>
              <p >ندعوك للتسجيل في السجل الاجتماعي الموحد وتقديم طلب الدعم من خلال البوابة www.asd.ma.</p>
              <p>1 - سجل في السجل الاجتماعي الموحد (USR) للاستفادة من الدعم الاجتماعي المباشر (SSD).</p>
              <p>2 - قدم طلبك للدعم من خلال البوابة www.asd.ma.</p>
              <p>3 - انتظر نتائج تقييم طلبك والقرار النهائي.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="anas">
        <p><em>{isArabic ? 'نظام المساعدات الاجتماعية المباشرة' : 'LE RÉGIME DES AIDES SOCIALES DIRECTES'}</em></p>
        <p className="content">{isArabic
          ? 'تمت إقامة المساعدات الاجتماعية المباشرة، وفقًا للتعليمات السامية لجلالة الملك وتطبيقًا لأحكام قانون الإطار رقم 09.21 بشأن الحماية الاجتماعية. يهدف هذا النظام الوطني إلى تحسين ظروف معيشة الأسر التي لديها أطفال في سن المدرسة أو الأسر التي تعاني من ضعف ولا تستفيد حاليًا من أي مساعدة عائلية، بهدف تقديم شبكة حماية اجتماعية ودعم قدرتها الشرائية. وستتلقى الأسر المستهدفة دعماً مالياً شهرياً، يختلف حسب تركيبة كل أسرة وحالة أعضائها، ولا يقل عن 500 درهم شهرياً، بعد استيفاء شروط الأهلية، بما في ذلك استيفاء الحد الأدنى وفقاً للنتيجة المحصل عليها في السجل الاجتماعي الموحد (RSU).'
          : 'Les aides sociales directes ont été instaurées, conformément aux Hautes Instructions Royales et en application des dispositions de la Loi-cadre n° 09.21 sur la protection sociale. Ce régime national vise à améliorer les conditions de vie des familles ayant des enfants en âge d’être scolarisés ou celles en situation de fragilité et qui ne bénéficient actuellement d\'aucune aide familiale, dans le but de leur offrir un filet de protection sociale et soutenir leur pouvoir d\'achat. Les familles ciblées recevront un soutien financier mensuel, variant selon la composition de chaque famille et la situation de ses membres, sans être inférieur à 500 dirhams par mois, une fois les conditions d\'éligibilité remplies, notamment la satisfaction du seuil en fonction du score obtenu dans le Registre Social Unifié (RSU).'}
        </p>
        <p className='first'>{isArabic ? '1.تعريف نظام المساعدات الاجتماعية المباشرة' : '1.DÉFINITION DU RÉGIME DES AIDES SOCIALES DIRECTES'}</p>
        <p className='second'>{isArabic ? '2.فئات المستفيدين' : '2.LES CATÉGORIES BÉNÉFICIAIRES'}</p>
        <p className='third'>{isArabic ? '3.المساعدات الاجتماعية المباشرة' : '3.LES AIDES SOCIALES DIRECTES'}</p>
        <p className='thirdone'>{isArabic ? '3.1 - المساعدات المتعلقة بالحماية ضد المخاطر المرتبطة بالطفولة' : '3.1 - AIDES RELATIVES À LA PROTECTION CONTRE LES RISQUES LIÉS À L’ENFANCE'}</p>
        <p className='thirdoneA'>{isArabic ? 'أ) - التعويضات الشهرية' : 'A) - ALLOCATION MENSUELLE'}</p>
        <p className='thirdoneB'>{isArabic ? 'ب) - التعويضات عند الولادة' : 'B) - ALLOCATION NAISSANCE'}</p>
        <p className='thirdtwo'>{isArabic ? '3.2 - المساعدة المقطوعة' : '3.2 - AIDE FORFAITAIRE'}</p>
        <p className='fourth'>{isArabic ? '4.شروط الأهلية' : '4.CONDITIONS D’ÉLIGIBILITÉ'}</p>
        <p style={{height:"80px",width:"100%"}}>
        <svg style={{float:isArabic ? 'left' : 'right',rotate:isArabic ? '180deg' : '0deg'}} xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#ff0000"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
        </p>
      </div>

      <div className="b">
        
    <p ><center>{isArabic ? 'فيديوهات توضيحية' : 'vidéos explicatives'}</center> </p>
    <div className="video-gallery">
        <div className="video-circle">
            <iframe
                src="https://www.youtube.com/embed/s6B259dWArY"
                title="Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="video-circle">
            <iframe
                src="https://www.youtube.com/embed/s6B259dWArY"
                title="Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="video-circle">
            <iframe
                src="https://www.youtube.com/embed/s6B259dWArY"
                title="Video 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="video-circle">
            <iframe
                src="https://www.youtube.com/embed/s6B259dWArY"
                title="Video 4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="video-circle">
            <iframe
                src="https://www.youtube.com/embed/s6B259dWArY"
                title="Video 5"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="video-circle">
            <iframe
                src="https://www.youtube.com/embed/s6B259dWArY"
                title="Video 6"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="video-circle">
            <iframe
                src="https://www.youtube.com/embed/s6B259dWArY"
                title="Video 7"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="video-circle">
            <iframe
                src="https://www.youtube.com/embed/s6B259dWArY"
                title="Video 8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    </div>

        <footer className="footer" style={{direction:"ltr"}}>
          <div className="footer-top-image">
            <img src="https://www.asd.ma/assets/info-img72392.png" alt="Top Image" />
          </div>
          <div className="footer-content">
            <div className="footer-section logos">
              <img src="https://www.dreamjob.ma/wp-content/uploads/2023/12/Asd.ma-1.png" alt="Logo" className="footer-logo" />
              <div className="social-media">
              <div className="sc-bYEuID keuJex" style={{width:"10vw",display:"flex",justifyContent:"space-between"}}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="37.778"
    height="37.778"
    viewBox="0 0 37.778 37.778"
  >
    <path
      data-name="facebook"
      d="M-594.757-227.005h27.89a1 1 0 0 0 .171.061 5.513 5.513 0 0 1 4.771 5.62v26.4a6.07 6.07 0 0 1-.125 1.279 5.5 5.5 0 0 1-5.452 4.4c-3.2.012-6.394 0-9.591 0h-.3v-13.426h5.68l.736-4.424h-6.405a.789.789 0 0 1-.029-.121v-4.093a2.243 2.243 0 0 1 2.443-2.424h4.175v-4.426h-5.363a5.535 5.535 0 0 0-5.683 5.688v5.39h-4.4v4.418h4.378v13.391a.81.81 0 0 1-.126.023c-4.144 0-8.289.049-12.431-.027a5.149 5.149 0 0 1-4.669-3.036 11.964 11.964 0 0 1-.607-1.877v-27.881c.025-.093.056-.184.073-.278a5.368 5.368 0 0 1 3.063-4.092 12.641 12.641 0 0 1 1.801-.565zm19.568 35.547c2.636 0 5.23.045 7.823-.015a3.266 3.266 0 0 0 3.227-3.458q.006-13.183 0-26.366a3.333 3.333 0 0 0-3.506-3.493h-26.338a3.333 3.333 0 0 0-3.5 3.5q-.005 13.165 0 26.33a3.864 3.864 0 0 0 .121 1.019 3.292 3.292 0 0 0 3.362 2.487q4.8.007 9.591 0c.107 0 .214-.011.323-.017v-9h-4.38v-8.843h4.406v-3.171a7.666 7.666 0 0 1 .414-2.607 7.733 7.733 0 0 1 7.456-5.273c2.422-.007 4.845 0 7.267 0h.337v8.864h-6.6v2.2h6.822l-1.476 8.858h-5.348z"
      transform="translate(599.701 227.005)"
      style={{ fill: "rgb(23, 86, 43)" }}
    ></path>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="39.627"
    height="34.965"
    viewBox="0 0 39.627 34.965"
  >
    <path
      data-name="new twiter"
      d="m-65.163-181.307 14.189-15.749-15-19.15h.846c3.655 0 7.311.01 10.966-.011a1.269 1.269 0 0 1 1.137.563c2.544 3.3 5.113 6.575 7.674 9.858.174.224.355.442.671.834a5.669 5.669 0 0 1 .414-.611q4.55-5.095 9.12-10.173a1.324 1.324 0 0 1 .826-.439c1.718-.04 3.437-.021 5.156-.017a4.63 4.63 0 0 1 .477.064l-13.219 14.716 15.56 20.092c-.314.028-.511.061-.708.062-3.631 0-7.262-.007-10.893.013a1.146 1.146 0 0 1-1.011-.524q-4.219-5.4-8.464-10.783c-.205-.261-.416-.519-.687-.859-.211.221-.4.414-.584.615q-4.929 5.478-9.846 10.965a1.592 1.592 0 0 1-1.367.587c-1.476-.039-2.953-.012-4.43-.014-.237-.001-.47-.022-.827-.039zm6.344-31.549a2.468 2.468 0 0 0 .155.314q10.748 13.712 21.5 27.419c.108.138.289.312.44.315 1.03.028 2.06.015 3.246.015-.257-.337-.408-.541-.564-.741l-8.811-11.327q-6.006-7.721-12.017-15.437c-.175-.224-.444-.519-.684-.532-1.046-.059-2.111-.026-3.265-.026z"
      transform="translate(65.976 216.218)"
      style={{ fill: "rgb(23, 86, 43)" }}
    />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50.116"
    height="37.295"
    viewBox="0 0 50.116 37.295"
  >
    <path
      data-name="Trac\xE9 2367"
      d="M-1611.751 1021.225h-39.744l-.218-.067a5.622 5.622 0 0 1-4.427-3.226 12 12 0 0 1-.548-1.736v-27.237l.073-.248a5.734 5.734 0 0 1 5.808-4.779c9.286-.007 29.061 0 38.345.01a6.472 6.472 0 0 1 1.932.3 5.582 5.582 0 0 1 3.955 5.469v25.735c0 .125 0 .251-.007.375a5.475 5.475 0 0 1-3.242 4.8 12.717 12.717 0 0 1-1.927.604zm2.864-18.1v-13.4a3.433 3.433 0 0 0-3.329-3.546 2.794 2.794 0 0 0-.317 0h-38.194a3.445 3.445 0 0 0-3.628 3.235v.291c-.006 8.957-.006 16.783 0 25.739a3.423 3.423 0 0 0 3.325 3.528h.3c9.246.007 28.981 0 38.229-.011a3.983 3.983 0 0 0 1.6-.339 3.286 3.286 0 0 0 2.007-3.234c.006-4.464.008-7.799.006-12.265zm-29.914-10.5 19.347 9.337-19.347 9.65zm3.216 4.755v9.4l9.58-4.777z"
      transform="translate(1656.687 -983.929)"
      style={{ fill: "rgb(23, 86, 43)" }}
    />
  </svg>
</div>
              
              </div>
            </div>
            <div className="footer-section info" style={{direction:"rtl"}}>
              <h4>{isArabic ? 'معلومات عملية' : 'information operationnelle'}</h4>
              <ul>
                <li>{isArabic ? 'خصوصية البيانات' : 'politique de confidentialité'}</li>
                <li>{isArabic ? 'الشروط العامة' : 'Conditions de utilisation'}</li>
                <li>{isArabic ? 'الإشعار القانوني' : 'Mentions légales'}</li>
                <li>{isArabic ? 'معلومات وشكايات' : 'Informations et plaintes'}</li>
              </ul>
            </div>
            <div className="footer-section links">
              <h4>{isArabic ? 'روابط مفيدة' : 'Sites utiles'}</h4>
              <ul>
                <li>{isArabic ? 'السجل الوطني للسكان (RNP)' : 'Registre national de la population (RNP)'}</li>
                <li>{isArabic ? 'السجل الاجتماعي الموحد (RSU)' : 'Registre Social Unifié (RSU)'}</li>
                <li>{isArabic ? 'الصندوق الوطني للضمان الاجتماعي (CNSS)' : 'National Securite sociale (CNSS)'}</li>
                <li>{isArabic ? 'الصندوق الوطني للتقاعد والتأمين (CNRA)' : 'Caisse Nationale de Retraite et de Assurance (CNRA)'}</li>
              </ul>
            </div>
          </div>
        </footer>






      </div>
    </div>

  );

}

export default Main;
