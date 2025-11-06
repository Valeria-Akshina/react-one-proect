import styless from './style/index.module.css'
import logo from '../../assets/img/logo.png'

export const Header = () => {
  return(
    <header className={styless.header}>
      <img src={logo} alt="#" />
      <div className={styless.links}>
        <a href="#">О нас</a>
        <a href="#">Проекты</a>
        <a href="#">Материалы</a>
        <a href="#">Отзывы</a>
      </div>
      <div className={styless.phoneNumber}>
        <h6>+7 999 999 99 99</h6>
      </div>
    </header>
  )
}