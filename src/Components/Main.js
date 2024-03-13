import styles from '../styles/App.module.css';

export function Main({ children }) {
	return <div className={styles.flex}>{children}</div>;
}
