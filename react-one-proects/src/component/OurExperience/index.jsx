import styless from "./style/index.module.css"

export const OurExperience = () => {
  return ( <div className={styless.secodTwo}>
    <div className={styless.heading}>
      <h2>Более 5 лет создаем<br />мебель для вашего<br />комфорта</h2>
    </div>
    <div className={styless.blockTwo}>
      <div className={styless.paragraph}>
        <p>Мы — команда профессионалов, которые могут <br /> произвести любую мебель для вашего 
        проекта, а также <br /> найти производственное решение любой задумки.</p>
      <p>Наша основная цель — реализовывать самые смелые <br /> 
        задумки, и делать это качественно и аккуратно.</p>
      <p>В качестве материалов мы используем натуральные — <br /> стекло, дерево, бетон, 
        камень, металл и эпоксидную смолу.</p>
      </div>
      <div className={styless.aboutInfo}>
        <div className={styless.aboutInfoItem}>
          <h3>1 год</h3>
          <p>гарантии на всю<br /> продукцию</p>
        </div>
        <div className={styless.aboutInfoItem}>
          <h3>300+</h3>
          <p>выполненных<br /> проектов</p>
        </div>
        <div className={styless.aboutInfoItem}>
          <h3>15 дней</h3>
          <p>срок производства</p>
        </div>
      </div>
    </div>
  </div>)
}