import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Hello, World!</h1>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut
            debitis aperiam eos ipsam magni laborum similique ea, nostrum
            possimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut
            debitis aperiam eos ipsam magni laborum similique ea, nostrum
            possimus?
          </p>
        </div>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
