import styles from './style/index.module.css'
import formImg from '../../assets/img/formImg.png'
import appStore from '../../assets/img/App Store.png'
import googlePlay from '../../assets/img/Google Play.png'

export const Form = () => {
    return (
        <form>
            <div className={styles.blockOne}>
                <img src={formImg} alt="#" />
            </div>
            <div className={styles.blockTwo}>
                <div className={styles.text}>
                    <h2>Хотите заказать проект?</h2>
                    <p>Оставьте заявку, и мы вам перезвоним</p>
                </div>
                <div className={styles.inputForm}>
                    <input type="text" placeholder='Имя' />
                    <input type="email" placeholder='E-mail' />
                    <input type="tel" placeholder='Телефон' />
                </div>
                <button>Отправить заявку</button>
                <div className={styles.buttonStore}>
                    <img src={appStore} alt="#" />
                    <img src={googlePlay} alt="#" />
                </div>
            </div>
        </form>
    )
}