import styles from './style/index.module.css'

export const Footer = () => {
    return (
        <footer>
            <div className={styles.one}>
                <p>© 2023 Aveji</p>
                <p>Все права защищены</p>
            </div>
            <div className={styles.two}>
                <p>Политика конфеденциальности / 
                    Оплата и доставка</p>
            </div>
            <div className={styles.three}>
                <p>Вконтакте</p>
                <p>Телеграм</p>
            </div>
        </footer>
    )
}