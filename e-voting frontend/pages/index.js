import Head from "next/head";
import Image from "next/future/image";
import { useEffect, useState } from "react";
import votingImage from "../asset/Voting.jpg";
import styles from "../styles/Home.module.css";
import Search from "../components/Search";
import Cards from "../components/Cards";

const Home = () => {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log(word);
  }, [word]);
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
        <Search setWord={setWord} />
      </div>
      <Cards word={word} />
    </>
  );
};

export default Home;
