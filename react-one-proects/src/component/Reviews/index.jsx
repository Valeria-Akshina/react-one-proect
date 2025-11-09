import icon from '../../assets/img/icon.png'
import styless from './style/index.module.css'

export const Reviews = ({ users }) => {
  const reviews = [
    "Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне.",
    "После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!",
    "Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!"
  ];

  return ( 
    <div className={styless.component}>
      <h2>Отзывы</h2>
      <div className={styless.row}>
        {users.map((user, index) => (
          <div key={user.id} className={styless.section}>
            <img src={icon} alt="#" />
            <p>{user.name} {user.surname}</p>
            <p>{reviews[index]}</p>
          </div>
        ))}
      </div>
    </div> 
  )
}