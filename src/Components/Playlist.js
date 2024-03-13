import styles from '../styles/App.module.css';
import { Track } from './Track';

export function Playlist({ playlist, onRemoveTrack }) {
	return (
		<ul className={styles.ul}>
			{playlist.map(track => (
				<Track
					key={track.id}
					track={track}
					onEditPlaylist={onRemoveTrack}
					addRemove={'-'}
				/>
			))}
		</ul>
	);
}
