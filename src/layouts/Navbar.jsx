import styles from "../components/Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink
                        to="/" className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to="/about" className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to="/posts" className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Posts
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
