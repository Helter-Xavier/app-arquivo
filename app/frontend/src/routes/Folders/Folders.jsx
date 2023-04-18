import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from '../Folders/Folders.module.css'

const Pastas = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.pastas}>
        <Sidebar />
        <div className={styles.container}>
        <h1>Pastas</h1>
      </div>
      </div>
    </div>
  )
}

export default Pastas