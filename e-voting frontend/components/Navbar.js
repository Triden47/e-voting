import styles from "../styles//Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_links}><Link href="/create">Create new poll</Link></div>
      
    </div>
  );
};

export default Navbar;
