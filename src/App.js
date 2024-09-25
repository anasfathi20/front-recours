import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter ,Routes, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Demande from './demande';
import Main from './main';
import Authentification from './pages/authentifictaion';
import Recours from './pages/recours';
import Ajouterdemande from './pages/ajouterdemande';






function App() {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/demande" element={<Demande />} />
          <Route path="/login" element={<Authentification />} />
          <Route path="/pp" element={<Recours />} />
          <Route path="/kk" element={<Ajouterdemande />} />
          <Route path="/cc" element={<Recours />} />
          <Route path="/oo" element={<Recours />} />
          <Route path="/gg" element={<Authentification />} />
          
        
      </Routes>
    </BrowserRouter>

  );

}

export default App;
