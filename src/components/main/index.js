import './main.css';

export const Main = () => {
  return (
    <div className="main">
      <div className="main-left">
        <h1 className="main-left_title">
          Зарабатывайте больше 
          <br />
          <span>с WELBEX</span>
        </h1>
        <p className="main-left_subtitle">
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </div>
      <div className="main-right">
        <h2 className="main-right_title">
          Вместе с 
            <span> бесплатной консультацией </span>
          мы дарим:
        </h2>
        <div className="main-right_info">
          <div className="main-right_info__item">
            <h4 className="main-right_info__item-title">
              виджеты
            </h4>
            <p className="main-right_info__item-description">
              30 готовых решений
            </p>
          </div>
          <div className="main-right_info__item">
            <h4 className="main-right_info__item-title">
              dashboard
            </h4>
            <p className="main-right_info__item-description">
              с показателями вашего бизнеса
            </p>
          </div>
          <div className="main-right_info__item">
            <h4 className="main-right_info__item-title">
              skype аудит
            </h4>
            <p className="main-right_info__item-description">
              отдела продаж и CRM системы
            </p>
          </div>
          <div className="main-right_info__item">
            <h4 className="main-right_info__item-title">
              35 дней
            </h4>
            <p className="main-right_info__item-description">
              использования CRM
            </p>
          </div>
        </div>
        <button className="main-right_btn">Получить консультацию</button>
      </div>
    </div>
  )
}