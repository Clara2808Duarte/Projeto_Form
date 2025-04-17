import './Navbar.css';

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/temaki">Temaki</a></li>
        <li><a href="/sushi">Hot-Holl</a></li>
        <li><a href="/sashimi">Salmão</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
