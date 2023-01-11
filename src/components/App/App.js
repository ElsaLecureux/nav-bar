import './App.scss';
import  googleFonts_logo from './googleLogo.png';

//TODO ajouter :hover pour le thème, changer les margin et padding des icones, diviser en composants, réfler le soucis de :hover des links
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
          <li><button class="list_item infos_button material-symbols-outlined">more_vert</button></li>
          <li><button class="list_item theme_button material-symbols-outlined">brightness_4</button></li>
          <li><button class="list_item cart_button material-symbols-outlined">dashboard_customize</button></li>
        </ul>
    </div>
      </nav>
    </div>
  );
}

export default App;
