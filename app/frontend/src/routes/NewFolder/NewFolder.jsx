import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from '../NewFolder/NewFolder.module.css'

const NewFolder = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.novaPasta}>
        <Sidebar />
        <div className={styles.container}>
          <h1>Nova Pasta</h1>
        </div>
      </div>
    </div>
  )
}

export default NewFolder;