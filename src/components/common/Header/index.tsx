import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../../assets/logo.svg';

export default function Header() {
  return (
    <header className={styles.headerComponent}>
      <div className={styles.headerContainer}>
        <nav>
          <Link to="/">
            <img src={logo} alt="BeTalent" className={styles.logo} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
