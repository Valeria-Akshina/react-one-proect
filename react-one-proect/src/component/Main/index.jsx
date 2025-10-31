import styless from './style/index.module.css'
import { GetStarted } from '../GetStarted'

export const Main = () => {
  return (
    <main className={styless.main}>
      <GetStarted/>
    </main>
  )
}