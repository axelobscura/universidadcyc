import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles//Home.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Universidad del Cemento y del Concreto - Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Universidad del Cemento y del Concreto - Instituto Mexicano del Cemento y del Concreto A.C." />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;700&display=swap" rel="stylesheet"></link>
      </Head>

      {children}

      <footer className={styles.footer}>
        <p>©2023 Todos Los Derechos Reservados. IMCYC.</p>
      </footer>
    </>
  )
}