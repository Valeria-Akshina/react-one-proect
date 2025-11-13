import styles from './style/index.module.css'
import project1 from '../../assets/img/project1.png'
import project2 from '../../assets/img/project2.png'
import project3 from '../../assets/img/project3.png'
import project4 from '../../assets/img/project4.png'
import project5 from '../../assets/img/project5.png'
import project6 from '../../assets/img/project6.png'
import arrow from '../../assets/img/arrow.png'

export const Galery = () => {
    return (
        <div className={styles.gallery}>
            <h3>Проекты</h3>
            <div className={styles.grid}>
                <div className={styles.photoItem}>
                    <img src={project1} alt="#" />
                    <div className={styles.photoCaption}>
                        <span className={styles.photoTitle}>Название проекта 1</span>
                        <div className={styles.photoArrow}>
                            <img src={arrow} alt="#" className={styles.arrowIcon} />
                        </div>
                    </div>
                </div>
                
                <div className={styles.photoItem}>
                    <img src={project2} alt="#" />
                    <div className={styles.photoCaption}>
                        <span className={styles.photoTitle}>Название проекта 2</span>
                        <div className={styles.photoArrow}>
                            <img src={arrow} alt="#" className={styles.arrowIcon} />
                        </div>
                    </div>
                </div>
                
                <div className={styles.photoItem}>
                    <img src={project3} alt="#" />
                    <div className={styles.photoCaption}>
                        <span className={styles.photoTitle}>Название проекта 3</span>
                        <div className={styles.photoArrow}>
                            <img src={arrow} alt="#" className={styles.arrowIcon} />
                        </div>
                    </div>
                </div>
                
                <div className={styles.photoItem}>
                    <img src={project4} alt="#" />
                    <div className={styles.photoCaption}>
                        <span className={styles.photoTitle}>Название проекта 4</span>
                        <div className={styles.photoArrow}>
                            <img src={arrow} alt="#" className={styles.arrowIcon} />
                        </div>
                    </div>
                </div>
                
                <div className={styles.photoItem}>
                    <img src={project5} alt="#" />
                    <div className={styles.photoCaption}>
                        <span className={styles.photoTitle}>Название проекта 5</span>
                        <div className={styles.photoArrow}>
                            <img src={arrow} alt="#" className={styles.arrowIcon} />
                        </div>
                    </div>
                </div>
                
                <div className={styles.photoItem}>
                    <img src={project6} alt="#" />
                    <div className={styles.photoCaption}>
                        <span className={styles.photoTitle}>Название проекта 6</span>
                        <div className={styles.photoArrow}>
                            <img src={arrow} alt="#" className={styles.arrowIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}