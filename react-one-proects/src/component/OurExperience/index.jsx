import styless from "./style/index.module.css"

export const OurExperience = () => {
  return ( <div className={styless.secodTwo}>
    <div className={styless.heading}>
      <h2>Более 5 лет создаем мебель для вашего комфорта</h2>
    </div>
    <div className={styless.blockTwo}>
      <div className={styless.paragraph}>
        <p>Мы — команда профессионалов, которые могут произвести любую мебель для вашего 
        проекта, а также найти производственное решение любой задумки.</p>
      <p>Наша основная цель — реализовывать самые смелые 
        задумки, и делать это качественно и аккуратно.</p>
      <p>В качестве материалов мы используем натуральные — стекло, дерево, бетон, 
        камень, металл и эпоксидную смолу.</p>
      </div>
      <div className={styless.aboutInfo}>
        <div className={styless.aboutInfoItem}>
          <h2>1 год</h2>
          <p>гарантии на всю продукцию</p>
        </div>
        <div className={styless.aboutInfoItem}>
          <h2>300+</h2>
          <p>выполненных проектов</p>
        </div>
        <div className={styless.aboutInfoItem}>
          <h2>15 дней</h2>
          <p>срок производства</p>
        </div>
      </div>
    </div>
  </div>)
}