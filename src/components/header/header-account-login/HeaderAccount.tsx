import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg';
import './style.css';
import { IUser } from '../../../interfaces/IUser';



export default function HeaderAccount(props: IUser) {
  return (
    <>
      <header className="header-account">
        <ul className="header-account-list">
          <li className="header-list__item">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </li>
          <li className="header-list__item">
            <ul className="header-account-list">
              <li className="header-account-list__item">
                <Link className="header-account-link__item" to='#'>
                  My ads
                </Link>
              </li>
              <li className="header-account-list__item">
                <Link className="header-account-link__item" to='#'>
                  Account
                </Link>
              </li>
            </ul>
          </li>
          <li className="header-list__item">
            <div className="profile-info">
              <h3 className='info-title'>{props.firstName} {props.lastName}</h3>
              <p className="info-balance-text">Balance: <span className='bold'>$0.00</span></p>
            </div>
          </li>
        </ul>
      </header>
    </>
  )
}
