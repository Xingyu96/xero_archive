  import Head from 'next/head'
import Image from 'next/image'
import ArchiveHeader from '../components/ArchiveHeader.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <ArchiveHeader/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Xero Archive
        </h1>


      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
