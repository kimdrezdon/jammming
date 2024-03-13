import styles from '../styles/App.module.css';

export function NavBar({ children }) {
	return (
		<div className={styles.nav}>
			<h1>Jammming</h1>
			{children}
			<h2>Username</h2>
		</div>
	);
}
