import logoDeveloper from "../Images/LogoFull.png";

function Header() {
    return (
        <header className="header">
            <div className="containerimg">
                <a href=""><img className="containerimg__logo" src={logoDeveloper} alt="logo developer" /></a>
            </div>
            <div className="header__title">
            <h1>Andrea Chust Ramos</h1>
            <h2>Full Stack Developer en Murcia</h2>
            </div>
            <nav>
                <ul className="list-header">
                <li><a href="">Inicio</a></li>
                <li><a href="">Sobre mí</a></li>
                <li><a href="">Linkdin</a></li>
                <li><a href="">GitHub</a></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;