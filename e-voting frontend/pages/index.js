import Head from "next/head";
import Image from "next/future/image";
import votingImage from "../asset/Voting.jpg";
import styles from "../styles/Home.module.css";

import Search from "../components/Search";
import Cards from '../components/Cards';

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <Image
            src={votingImage}
            alt="E-Voting"
            width="0"
            height="0"
            style={{ width: "500px", height: "auto" }}
          />
        </div>
        <div className={styles.container}></div>
        <Search />
      </div>
      <Cards />
    </>
  );
}
