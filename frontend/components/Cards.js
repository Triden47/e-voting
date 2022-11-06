import Link from "next/link";
import styles from "../styles/Cards.module.css";
import { useState, useEffect } from "react";

import { Heading, Text, Button } from "@chakra-ui/react";

//Components
import { getPolls } from "../api/api";

const Cards = ({ word }) => {
  const [polls, setPolls] = useState([]);
  useEffect(() => {
    const someFunction = async () => {
      setPolls(await getPolls());
    };
    someFunction();
  }, []);

  return (
    <div className={styles.grid_container}>
      {polls.filter((poll) => poll.title.toLowerCase().includes(word.toLowerCase()))
        .map((poll) => (
          <div key={poll._id} className={styles.grid_item}>
            <Heading size="md" m={2}>
              {poll.title}
            </Heading>
            <Text fontSize="xl" m={2}>
              {/* <Icon as={TimeIcon} h={4} m={2} /> */}
              {poll.description}
            </Text>
            <Button>
              <Link href="/[pollPageid]" as={`/${poll._id}`}>
                Cast your vote
              </Link>
            </Button>
          </div>
        ))}
    </div>
  );
};

export default Cards;
