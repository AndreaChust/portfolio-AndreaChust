import logoDeveloper from "../Images/LogoFull.png";

function Header() {
    return (
        <header className="header">
            <div className="containerimg">
                <img className="containerimg__logo" src={logoDeveloper} alt="" />
            </div>
            <h1>Andrea Chust Ramos</h1>
        </header>
    )
}

export default Header;