import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles//Home.module.css'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Head>
          <title>Universidad del Cemento y del Concreto - Instituto Mexicano del Cemento y del Concreto A.C.</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>©2023 Todos Los Derechos Reservados. IMCYC.</p>
      </footer>
    </div>
  )
}