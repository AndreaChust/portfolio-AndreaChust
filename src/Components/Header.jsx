import logoDeveloper from "../Images/LogoFull.png";

function Header() {
    return (
        <header className="header">
            <div className="containerimg">
                <a href=""><img className="containerimg__logo" src={logoDeveloper} alt="logo developer" /></a>
            </div>
            <div>
            <h1 className="header__title">Andrea Chust Ramos</h1>
            <h2>Full Stack Developer en Murcia</h2>
            </div>
            <nav>
                <ul className="list-header">
                <a href=""><li>Inicio</li></a>
                <a href=""><li>Sobre mí</li></a>
                <a href=""><li>Linkdin</li></a>
                <a href=""><li>GitHub</li></a>
                </ul>

            </nav>
        </header>
    )
}

export default Header;