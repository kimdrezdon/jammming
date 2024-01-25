import Track from './Track';
import styles from '../styles/Tracklist.module.css';

function Tracklist(props) {
	const { tracks, addRemove } = props;
	return (
		<div className={styles.div}>
			{tracks.map(track => (
				<Track
					key={track.id}
					addRemove={addRemove}
					track={track}
				/>
			))}
		</div>
	);
}

export default Tracklist;
