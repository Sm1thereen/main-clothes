import Header from '../../components/header/header-main-page/HeaderMainPage'
import MainContent from '../../components/main-content/MainContent'
import Footer from '../../components/footer/Footer'
import authCheck from '../../services/authCheck'
import HeaderAccount from '../../components/header/header-account-login/HeaderAccount';
import { IUser } from '../../interfaces/IUser';
import getHeader from '../../components/getHeader';


export default function MainPage() {
  const user: IUser = authCheck();
  const props: IUser = getHeader(user);

  return (
    <>
      <div className="container">
        {user ? <HeaderAccount {...props} /> : <Header />}
        <MainContent />
        <Footer />
      </div>
    </>
  )
}
