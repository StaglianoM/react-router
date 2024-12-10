import { Link } from 'react-router-dom';
import styles from '../components/Buttons.module.css'

export default function NotFound() {
  return (
    <main>
      <section>
        <div className="container">
          <h1>404</h1>
          <p>Pagina non trovata</p>
          <Link to="/" className={styles.button}>
            Torna alla Home
          </Link>
        </div>
      </section>
    </main>
  );
}
