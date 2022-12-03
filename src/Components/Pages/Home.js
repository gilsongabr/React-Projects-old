import styles from './Home.module.css'
import savings from '../../img/savings.png'
import LinkButton from '../Layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1> Bem-vindo ao <span>Delivery</span></h1>
      <p>Comece a gerenciar as suas entregas agora mesmo!</p>
      <LinkButton to="/newdelivery" text="Nova Entrega"/>
      <img src={savings} alt="Delivery"/>
    </section>
  )
}

export default Home
