import styless from './style/index.module.css'
import oneImg from '../../assets/img/one-section1.png'
import twoImg from '../../assets/img/two-section1.png'

export const GetStarted = () => {
  return (
          <section className={styless.getStarted}>
          <div className={styless.container}>
            <div className={styless.oneContainer}>
              <h1>ЭКСКЛЮЗИВНАЯ <br /> И НЕСТАНДАРТНАЯ <br /> МЕБЕЛЬ ДЛЯ ДОМА</h1>
            </div>
            <div className={styless.twoContainer}>
              <a href="#section">ЗАКАЗАТЬ ПРОЕКТ</a>
            </div>
          </div>
          <div className={styless.containerTwo}>
            <div className={styless.containerTwoone}>
              <p>Мы можем произвести любую мебель для <br /> вашего проекта и 
                найти производственное <br /> решение любой задумки.</p>
                <img src={oneImg} alt="#" />
            </div>
            <div>
                <img src={twoImg} alt="#" />
            </div>
          </div>
      </section>
  )
}