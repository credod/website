import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Credo Duarte</title>
      <meta name='description' content="Credo's personal website"></meta>
    </Head>
    <div className={styles.container}>
      <h1>Credo Duarte</h1>
      <p>Frontend Developer</p>
    </div>
    </>
  )
}

export default Home
