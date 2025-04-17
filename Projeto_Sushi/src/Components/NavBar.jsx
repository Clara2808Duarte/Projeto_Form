import Logo from '../assets/Urban.png'
import './NavBar.css'

function Nav() {
  return (
    <nav className="navbar">
      <a>
      <img className="ImgLogo" src={Logo} alt="Logo" />
      </a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/temaki">Temaki</a></li>
        <li><a href="/sushi">Combo e Combinados</a></li>
        <li><a href="/Adicionais">Adicionais</a></li>
        <li><a href="/Sobremesas">Sobremesas</a></li>
        <li><a href="/Promocoes">Promoções</a></li>
        <li><a href="/Finalizar">Finalizar pedido</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
