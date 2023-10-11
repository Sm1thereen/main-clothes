import user from '../../assets/account-page/user-icon.svg';

export default function UserPhoto() {
  return (
    <>
      <div className="user-photo-wrapper">
        <div className="user-icon-wrapper">
          <img className='user-icon' src={user} alt="" />
        </div>

        <button className="user-button">
          Change Photo
        </button>
      </div>

    </>
  )
}
