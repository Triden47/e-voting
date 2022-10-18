import styles from "../styles//Navbar.module.css";
import Link from "next/link";

import { Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_links}>
        <Button>
          <Link href="/create">Create new poll</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
