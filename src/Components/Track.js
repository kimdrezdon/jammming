import styles from '../styles/App.module.css';

export function Track({ track, onEditPlaylist, addRemove }) {
	const { id, album, name, artists } = track;

	return (
		<li className={styles.li}>
			<img
				src={album.images[2].url}
				alt={`${album.name} album cover`}
			/>
			<div>
				<h3>{name}</h3>
				<h4>
					<span>{artists[0].name}</span> -<span>{album.name}</span>
				</h4>
			</div>
			<button
				className={styles.addRemoveButton}
				onClick={() => onEditPlaylist(track)}
			>
				{addRemove}
			</button>
		</li>
	);
}
