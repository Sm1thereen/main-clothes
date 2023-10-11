export default function ChangeInfo() {
    return (
        <>
            <div className="change-info-wrapper">
                <div className="change-info-email">
                    <form className="change-email">
                        <input type="text" className="login-input change" placeholder='test@gmail.com' />
                        <button className="user-button  button change-info-btn">Change mail</button>
                    </form>
                </div>
                <div className="change-info-password">
                    <form action="" className="change-password">
                        <input type="text" className="login-input change" name='change-password' />
                        <button className="user-button  button change-info-btn">Change password</button>
                    </form>
                </div>
            </div>
        </>
    )
}
