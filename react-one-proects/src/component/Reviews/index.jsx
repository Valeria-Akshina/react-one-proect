import icon from '../../assets/img/icon.png'
import styless from './style/index.module.css'

export const Reviews = () => {
return( <div className={styless.component}>
  <h2>Отзывы</h2>
  <div className={styless.row}>
    <div className={styless.section}>
    <img src={icon} alt="#" />
    <p></p>
    <p>Обратилась к Aveji по рекомендации. Команда<br />
    сразу поняла, какой дизайн я хочу. <br />
    Предоставили несколько вариантов <br />
    и в течение недели сделали наброски. Итог
    <br /> понравился, все на высшем уровне.</p>
    </div>
    <div className={styless.section}>
    <img src={icon} alt="#" />
    <p></p>
    <p>После пары заказов у компании Aveji <br />
    убедилась, что за мебелью теперь только <br />
    к ним. Абсолютно любые решения, в любых <br />
    размерах и форм-факторе, то что нужно!</p>
    </div>
    <div className={styless.section}>
    <img src={icon} alt="#" />
    <p></p>
    <p>Aveji — настоящие профессионалы своего дела. <br />
    Быстро поняли мою задумку, сделали дизайн, <br />
    согласовали и изготовили мебель. А потом еще <br />
    и бесплатно все собрали на месте. Большое спасибо!</p>
    </div>
  </div>
</div> )}