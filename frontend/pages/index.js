import Head from "next/head";
import Image from "next/future/image";
import { useState } from "react";
import votingImage from "../asset/Voting.jpg";
import styles from "../styles/Home.module.css";
import { Box, Container } from '@chakra-ui/react'

//components
import Search from "../components/Search";
// import Cards from "../components/Cards";
import HomeTabs from "../components/HomeTabs";

const Home = () => {
  const [word, setWord] = useState("");

  // useEffect(() => {
  //   console.log(word);
  // }, [word]);
  return (
    <>
      <div className={styles.main}>
        <div>
          <Image src={votingImage} alt="E-Voting" />
        </div>
        <div className={styles.container}></div>
        <Search setWord={setWord} />
      </div>
      {/* <Cards word={word} /> */}
      <Box><HomeTabs word={word} /></Box>
      
    </>
  );
};

export default Home;
