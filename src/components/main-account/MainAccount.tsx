import './style.css';
import stroke from '../../assets/account-page/stroke-gorizont.svg';
import UserInfo from './UserInfo';
import UserPhoto from './UserPhoto';
import ChangeInfo from './ChangeInfo';


export default function MainAccount() {
    return (
        <>
            <div className="container center">
                <div className="profile-container">
                    <div className="profile-info-account">
                        <div className="profile-bio">
                            <div className="user-info-wrapper">
                                <UserInfo />
                            </div>
                            <div className="user-photo">
                                <UserPhoto />
                            </div>
                        </div>
                        <div className="change-info">
                            <img className='stroke-center' src={stroke} alt="" />
                            <ChangeInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
