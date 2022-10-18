import { useEffect, useState } from "react";
import styles from "../styles//Search.module.css";

const Search = () => {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log(word);
  }, [word]);
  return (
    <>
      <input
        className={styles.search}
        type="text"
        placeholder="search polls"
        onChange={(event) => setWord(event.target.value)}
      ></input>
    </>
  );
};

export default Search;
