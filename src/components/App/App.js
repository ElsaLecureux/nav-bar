import './App.scss';
import  googleFonts_logo from './googleLogo.png';
import  Home  from '../Home/Home';
import  Icons  from '../Icons/Icons';
import  Knowledge  from '../Knowledge/Knowledge';
import  FAQ  from '../FAQ/FAQ';
import { NavLink, Routes, Route } from 'react-router-dom';

//TODO ajouter :hover pour le thème, changer les margin et padding des icones, diviser en composants, réflechir le soucis de :hover des links
function App() {
  return (
    <div className="App">
      <div className="navBar_container">
        <div className="title_container">
          <img className="logoGoogleFonts" src={googleFonts_logo} alt="google-fonts logo"/>
          <h1 className="title"><span className="google_title">Google </span>Fonts</h1>
        </div>
        <nav className="lists_container">
          <ul className="list-name_container">
            <li><NavLink className="list_item fonts_link" to="/">Fonts</NavLink></li>
            <li><NavLink className="list_item icons_link" to="/Icons">Icons</NavLink></li>
            <li><NavLink className="list_item knowledge_link" to="/Knowledge">Knowledge</NavLink></li>
            <li><NavLink className="list_item faq_link" to="/FAQ">FAQ</NavLink></li>
          </ul>
          <ul className="list-icon_container">
            <li><button class="list_item infos_button material-symbols-outlined">more_vert</button></li>
            <li><button class="list_item theme_button material-symbols-outlined">brightness_4</button></li>
            <li><button class="list_item cart_button material-symbols-outlined">dashboard_customize</button></li>
          </ul>
        </nav>
      </div>
      <Routes>
      <Route path="/" element={(<Home />)} />
      <Route path="/Icons" element={(<Icons />)} />
      <Route path="/Knowledge" element={(<Knowledge />)} />
      <Route path="/FAQ" element={(<FAQ />)} />     
      </Routes>
    </div>
  );
}

export default App;
