import HeaderAccount from '../../components/header/header-account-login/HeaderAccount'
import Footer from '../../components/footer/Footer'
import MainAccount from '../../components/main-account/MainAccount'
import { IUser } from '../../interfaces/IUser';
import authCheck from '../../services/authCheck';
import getHeader from '../../components/getHeader';

export default function AccountPage() {
  const user: IUser = authCheck();
  const props: IUser = getHeader(user);

  return (
    <div className="container">
      <HeaderAccount {...props} />
      <MainAccount />
      <Footer />
    </div>
  )
}
