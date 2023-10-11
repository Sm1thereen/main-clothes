import './style.css';
import logo from '../../../assets/logo.svg';
import UK from '../../../assets/main-page/flag/English.svg';
import PL from '../../../assets/main-page/flag/Polish.svg';
import stroke from '../../../assets/main-page/header/stroke-reg.svg';
import { Link } from 'react-router-dom';


export default function HeaderRegistration() {
    return (
        <header className="header">
            <ul className="header-list">
                <li className="header-list__item">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </li>
                <li className="header-list__item">
                    <ul className="header-language">
                        <li className="header-language__item">
                            <p className="header-language__text">Language:</p>
                        </li>
                        <li className="header-language__item">
                            <button>
                                <img src={UK} alt="" />
                            </button>
                        </li>
                        <li className="header-language__item">
                            <img src={stroke} alt="" />
                        </li>
                        <li className="header-language__item">
                            <button>
                                <img src={PL} alt="" />
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </header>
    )
}
