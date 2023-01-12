import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles//Home.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Universidad del Cemento y del Concreto - Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Universidad del Cemento y del Concreto - Instituto Mexicano del Cemento y del Concreto A.C." />
      </Head>

      {children}

      <footer className={styles.footer}>
        <p>©2023 Todos Los Derechos Reservados. IMCYC.</p>
      </footer>
    </>
  )
}