import logoDeveloper from "../Images/Logoinv.png";

function Header() {
  return (
    <>
            <div className="containerimg">
          <a href="">
            <img
              className="containerimg__logo"
              src={logoDeveloper}
              alt="logo developer"
            />
          </a>
        </div>
      <header className="header">
        <div className="header__title">
          <h1>Andrea Chust Ramos</h1>
          <h2>Full Stack Developer en Murcia</h2>
        </div>
        <nav className="menu">
          <ul className="list-header">
            <li className="li-btn">
              <a href="">Inicio</a>
            </li>
            <li className="li-btn">
              <a href="">El viaje</a>
            </li>
            <li className="li-btn">
              <a href="">
                <strong>Mis proyectos</strong>
              </a>
            </li>
            <li className="li-btn">
              <a
                href="https://www.linkedin.com/in/andreachustramos/"
                target="_blank"
              >
                Linkdin
              </a>
            </li>
            <li className="li-btn">
              <a href="https://github.com/AndreaChust" target="_blank">
                GitHub
              </a>
            </li>
            <li className="li-btn">
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
