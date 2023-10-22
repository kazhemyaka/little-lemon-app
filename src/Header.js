import Nav from "./Nav";
import './Header.css';

function Header() {
    return(
        <header className="header">
            <img src="/images/Logo.svg" alt="Logo"></img>
            <Nav />
        </header>
    )
}

export default Header;