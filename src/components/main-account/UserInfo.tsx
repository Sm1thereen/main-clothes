import telegram from '../../assets/account-page/social-icons/facebook.svg';
import facebook from '../../assets/account-page/social-icons/telegram.svg';
import { IUser } from '../../interfaces/IUser';
import authCheck from '../../services/authCheck';

export default function UserInfo() {
    const user: IUser = authCheck();
    return (
        <>
            <div className="user-info-wrapper">
                <div className="user-info">
                    <div className="profile-bio-info">
                        <h2 className="profile-title">{user.firstName} {user.lastName}</h2>
                        <p className="profile-balance">Balance:<span className='bold'>$0.00</span></p>
                    </div>
                </div>
                <div className="contacts-info">
                    <h3 className="contacts-title">contacts</h3>
                    <ul className="social-info">
                        <li className="social-info__item">
                            <a href="" className="social-info__link">
                                <img src={telegram} alt="" />
                                ivan_kotov
                            </a>
                        </li>
                        <li className="social-info__item">
                            <a href="" className="social-info__link">
                                <img src={facebook} alt="" />
                                ivan.kotov
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
