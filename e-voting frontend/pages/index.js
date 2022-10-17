import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Search from "../components/Search";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-voting</title>
      </Head>
      <h1>E-Voting</h1>
      <Search />
    </div>
  );
}
