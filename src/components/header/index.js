import logo from '../../assets/svg/logo.svg';
import telegram from '../../assets/svg/telegram.svg';
import phone from '../../assets/svg/phone.svg';
import viber from '../../assets/svg/viber.svg';
import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="logo_subtitle">крупный интегратор CRM в Росcии и ещё 8 странах</div>
      </div>
      <div className="header-nav">
        <a className="header-nav_link" href="#">Услуги</a>
        <a className="header-nav_link" href="#">Виджеты</a>
        <a className="header-nav_link" href="#">Интеграция</a>
        <a className="header-nav_link" href="#">Кейсы</a>
        <a className="header-nav_link" href="#">Сертификаты</a>
      </div>
      <div className="phone-number">+7 555 555-55-55</div>
      <div className="socials">
        <img src={telegram} alt="telegram" />
        <img src={phone} alt="phone" />
        <img src={viber} alt="viber" />
      </div>
    </div>
  )
}