import './style.css'
import logo from '../../assets/logo.svg';
import facebook from '../../assets/main-page/footer/social-icon/facebook.svg';
import instagram from '../../assets/main-page/footer/social-icon/instagram.svg';
import whatsApp from '../../assets/main-page/footer/social-icon/whatsapp.svg';

export default function
    () {
    return (
        <>
            <footer className="footer">
                <ul className="footer-list">
                    <li className="footer-list__item">
                        <a href="#!" className="footer-list__item__logo">
                            <img src={logo} alt="" />
                        </a>
                    </li>
                    <li className="footer-list__item">
                        <a href="#!" className="footer-list__item__terms">Terms of use</a>
                    </li>
                    <li className="footer-list__item">
                        <ul className="footer-list__social">
                            <li className="footer-list__social__item">
                                <a href="#!" className="footer-list___social__link">
                                    <img src={facebook} alt="" />
                                </a>
                            </li>
                            <li className="footer-list__social__item">
                                <a href="#!" className="footer-list___social__link">
                                    <img src={instagram} alt="" />
                                </a>
                            </li>
                            <li className="footer-list__social__item">
                                <a href="#!" className="footer-list___social__link">
                                    <img src={whatsApp} alt="" />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </>
    )
}
