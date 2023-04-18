
import styles from './Home.module.css'
import './Home.css'

import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
  

  return (
    <div className={styles.body}>
      <Navbar/>
      
      <div className={styles.home}>
        <Sidebar /> 
        </div>
      <div className={styles.container}>
        <h1>Início</h1>

      </div>
    </div>
  )
}

export default Home;