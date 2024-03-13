import styles from '../styles/App.module.css';

export function Box({ children }) {
	return <div className={styles.box}>{children}</div>;
}
