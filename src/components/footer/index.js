import './footer.css';
import telegram from '../../assets/svg/telegram.svg';
import phone from '../../assets/svg/phone.svg';
import viber from '../../assets/svg/viber.svg';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <div className="footer_title">О компании</div>
        <a href="#" className="footer_link">Партнёрская программа</a>
        <a href="#" className="footer_link">Вакансии</a>
      </div>
      <div className="footer_middle">
        <div className="footer_title">Меню</div>
        <div className="footer_middle__wrapper">
          <div className="footer_middle__left">
            <a href="#" className="footer_link">Расчёт стоимости</a>
            <a href="#" className="footer_link">Услуги</a>
            <a href="#" className="footer_link">Виджеты</a>
            <a href="#" className="footer_link">Интеграции</a>
            <a href="#" className="footer_link">Наши&nbsp;клиенты</a>
          </div>
          <div className="footer_middle__right">
            <a href="#" className="footer_link">Кейсы</a>
            <a href="#" className="footer_link">Благодарственные письма</a>
            <a href="#" className="footer_link">Сертификаты</a>
            <a href="#" className="footer_link">Блог на Youtube</a>
            <a href="#" className="footer_link">Вопрос / Ответ</a>
          </div>
        </div>
      </div>
      <div className="footer_right">
        <div className="footer_title">Контакты</div>
        <div className="footer_phone-number">+7 555 555-55-55</div>
        <div className="footer_socials">
          <img src={telegram} alt="telegram" />
          <img src={phone} alt="phone" />
          <img src={viber} alt="viber" />
        </div>
        <address className="footer_address">
          Москва, Путевой проезд 3с1, к 902
        </address>
        <div className="footer_rights">
          ©WELBEX 2022. Все права защищены.
          <a className="footer_rights__link" href="#">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </div>
  )
}