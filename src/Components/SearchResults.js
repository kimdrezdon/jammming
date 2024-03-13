import styles from '../styles/App.module.css';
import { Track } from './Track';

export function SearchResults({ searchResults, onAddTrack }) {
	return (
		<ul className={styles.ul}>
			{searchResults.map(track => (
				<Track
					key={track.id}
					track={track}
					onEditPlaylist={onAddTrack}
					addRemove={'+'}
				/>
			))}
		</ul>
	);
}
