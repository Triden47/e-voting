import Link from "next/link";
import styles from "../styles/Cards.module.css";
import { useContext } from "react";

import { Heading, Text, Button } from "@chakra-ui/react";

//Components
import { AdminContext } from "./context/AdminProvider";

const Cards = ({ word, polls }) => {
  const { admin } = useContext(AdminContext);

  return (
    <div className={styles.grid_container}>
      {polls
        .filter((poll) => poll.title.toLowerCase().includes(word.toLowerCase()))
        .map((poll) => (
          <div key={poll._id} className={styles.grid_item}>
            <Heading size="md" m={2}>
              {poll.title}
            </Heading>
            <Text fontSize="xl" m={2}>
              {poll.description}
            </Text>
            <Button>
              {admin ? (
                <Link
                  href={{
                    pathname: "/create",
                    query: { id: poll._id },
                  }}
                >
                  Details
                </Link>
              ) : poll.state === "active" ? (
                <Link href="/[pollPageid]" as={`/${poll._id}`}>
                  Cast your vote
                </Link>
              ) : (
                <Link
                  href={{
                    pathname: "/results",
                    query: { id: poll._id },
                  }}
                >
                  Results
                </Link>
              )}
            </Button>
          </div>
        ))}
    </div>
  );
};

export default Cards;
