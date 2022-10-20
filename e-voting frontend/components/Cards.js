import Link from "next/link";
import styles from "../styles/Cards.module.css";
import polls from "../data/pollsData.js";

import { Heading, Text, Button, Icon } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

const Cards = ({ word }) => {
  return (
    <div className={styles.grid_container}>
      {polls
        .filter((poll) => poll.title.toLowerCase().includes(word.toLowerCase()))
        .map((poll) => (
          <div className={styles.grid_item}>
            <Heading size="md" m={2}>
              {poll.title}
            </Heading>
            <Text fontSize="xl" m={2}>
              <Icon as={TimeIcon} h={4} m={2} />
              {poll.time_left}
            </Text>
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
