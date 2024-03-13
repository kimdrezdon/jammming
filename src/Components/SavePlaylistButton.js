import styles from '../styles/App.module.css';

export function SavePlaylistButton() {
	return (
		<button
			onClick={() => alert('Saved to Spotify')}
			className={styles.save}
		>
			Save to Spotify
		</button>
	);
}
