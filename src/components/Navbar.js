import "./Navbar.css";

function Navbar() {
  return (
    <nav className="barra-de-navegacao">
      <div className="logo-site">EventUp</div>
      <ul className="links-de-navegacao">
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/eventos">Eventos</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
