import './App.scss';
import  googleFonts_logo from './googleLogo.png';

//TODO changer les liens des icones en buttons, ajouter :hover pour le thème
function App() {
  return (
    <div className="App">
      <nav className="navBar_container">
        <div className="title_container">
        <img className="logoGoogleFonts" src={googleFonts_logo} alt="google-fonts logo"/>
          <h1 className="title"><span className="google_title">Google </span>Fonts</h1>
        </div>
        <div className="lists_container">
        <ul className="list-name_container">
          <li><a className="list_item fonts_link" href="*">Fonts</a></li>
          <li><a className="list_item icons_link" href="*">Icons</a></li>
          <li><a className="list_item knowledge_link" href="*">Knowledge</a></li>
          <li><a className="list_item faq_link" href="*">FAQ</a></li>
        </ul>
        <ul className="list-icon_container">
          <li><a className="list_item infos_link" href="*"><span class="material-symbols-outlined">more_vert</span></a></li>
          <li><a className="list_item theme_link" href="*"><span class="material-symbols-outlined">brightness_4</span></a></li>
          <li><a className="list_item cart_link" href="*"><span class="material-symbols-outlined">dashboard_customize</span></a></li>
        </ul>
    </div>
      </nav>
    </div>
  );
}

export default App;
