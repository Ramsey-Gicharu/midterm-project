import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Featured from '../components/Featured'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

export default function Home({menuItem}) {

  return (
    <div className={styles.container}>
     
      <Head>
        <title>Food Order Management App</title>
        <meta name="description" content="Food ordering app service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <Menu menuItem= {menuItem} />
  
      </div>
  )
}

export const getServerSideProps = async () => {

  const res = await axios.get("http://localhost:3000/api/foods");
  return {
    props: {
      menuItem: res.data,
    },
  };
};