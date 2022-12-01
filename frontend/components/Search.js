import { useEffect, useRef } from "react";
import styles from "../styles//Search.module.css";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = ({ setWord }) => {
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) inputElement.current.focus();
  });
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        // children={<SearchIcon color="gray" />}
      />
      <Input
        focusBorderColor="black"
        variant="filled"
        placeholder="Search polls"
        autoFocus
        onChange={(event) => setWord(event.target.value)}
        ref={inputElement}
      />
    </InputGroup>
  );
};

export default Search;
