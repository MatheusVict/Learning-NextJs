import NavBar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='keyworkds' content='Roupas, calças'></meta>
        <meta name='description' content='Melhores roupas para você'></meta>
      </Head>
      <div className={styles.container}>
        <h1>Vamooo</h1>
      </div>
    </>
  )
};
