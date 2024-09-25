import React from "react";
import "./ajouterdemande.css"; 
import { NavLink } from "react-router-dom";

function Ajouterdemande() {
  return (
    
    
    
    <div className="containerA">
      
      
      <header className="header">
                <div className="logo">
                    <img src="https://www.dreamjob.ma/wp-content/uploads/2023/12/Asd.ma-1.png" alt="Logo" />
                    <div className="separator"></div>
                    <h1>Aide Sociale Directe</h1>
                </div>
                <nav className="nav">
                    <ul>
                      
                     <NavLink  to="/oo"><li><a href="#">Recours</a></li></NavLink>   
                    </ul>
                    
                    
                </nav>
            </header>
      <h1>Envoyez-nous vos recours en complétant le formulaire ci-dessous:</h1>

      <div className="form-groupA">
        <label htmlFor="email">Informations de contact:</label>
        <input type="email" id="email" placeholder="E-mail" />
      </div>

      <div className="form-groupA">
        <label htmlFor="title">Donnez-nous des détails sur votre demande:</label>
        <input type="text" id="title" placeholder="Titre" />
      </div>

      <div className="form-groupA">
        <select id="demand">
          <option value="---">Demande</option>
          <option value="option1">aide forfaiaire / id demande</option>
          <option value="option2">aide forfaitaire /id demande </option>
          <option value="option3">aide forfaitaire /id demande </option>
        </select>
      </div>

      <div className="form-groupA">
        <textarea id="claim" placeholder="Réclamation (2000 caractères maximum)"></textarea>
      </div>

      <div className="button-containerA">
        <button type="submit">Envoyer ma demande</button>
       <NavLink to="/cc" className="return-button">
          Retour
        </NavLink> 
      </div>
    </div>
  );
}

export default Ajouterdemande;
