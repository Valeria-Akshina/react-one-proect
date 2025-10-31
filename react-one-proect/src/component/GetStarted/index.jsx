import styless from './style/index.module.css'

export const GetStarted = () => {
  return (
          <section className={styless.getStarted}>
          <div className={styless.container}>
            <h1>ЭКСКЛЮЗИВНАЯ <br /> И НЕСТАНДАРТНАЯ <br /> МЕБЕЛЬ ДЛЯ ДОМА</h1>
            <a href="#">ЗАКАЗАТЬ ПРОЕКТ</a>
          </div>
      </section>
  )
}