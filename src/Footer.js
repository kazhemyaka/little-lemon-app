import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <img src="/images/Logo.svg" alt="Logo"></img>
            <div className='footer-nav'>
                <p>Doormat Navigation</p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div className='footer-nav'>
                <p>Contact</p>
                <ul>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Phone number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
            <div className='footer-nav'>
                <p>Social Media Links</p>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;