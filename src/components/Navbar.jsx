import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink to="/" className={styles.navLink}>Home</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/about" className={styles.navLink}>About</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/posts" className={styles.navLink}>Posts</NavLink>
                </li>
            </ul>
        </nav>
    );
}
