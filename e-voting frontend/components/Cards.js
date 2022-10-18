import Link from "next/link";
import styles from "../styles/Cards.module.css";
import polls from "../data/pollsData.js";

import { Button } from "@chakra-ui/react";

const Cards = ({ word }) => {
  return (
    <div className={styles.grid_container}>
      {polls
        .filter((poll) => poll.title.toLowerCase().includes(word.toLowerCase()))
        .map((poll) => (
          <div className={styles.grid_item}>
            <h3>{poll.title}</h3>
            <h5>{poll.time_left}</h5>
            <Button>
              <Link href="/[_id]" as={`/${poll._id}`}>
                Cast your vote
              </Link>
            </Button>
          </div>
        ))}
    </div>
  );
};

export default Cards;
