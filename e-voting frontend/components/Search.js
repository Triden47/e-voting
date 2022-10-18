import { useEffect, useRef } from "react";
import styles from "../styles//Search.module.css";

const Search = ({ setWord }) => {
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) inputElement.current.focus();
  });
  return (
    <>
      <input
        autoFocus
        className={styles.search}
        type="text"
        placeholder="search polls"
        onChange={(event) => setWord(event.target.value)}
        ref={inputElement}
      />
    </>
  );
};

export default Search;
