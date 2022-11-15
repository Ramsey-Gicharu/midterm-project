import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Featured from '../components/Featured'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
     
      <Head>
        <title>Food Order Management App</title>
        <meta name="description" content="Food ordering app service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <Menu />
  
      </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};