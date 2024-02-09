import Track from './Track';
import styles from '../styles/Tracklist.module.css';

function Tracklist(props) {
	const { tracks, addRemove } = props;
	return (
		<ul className={styles.ul}>
			{tracks.map(track => (
				<Track
					key={track.id}
					addRemove={addRemove}
					trackObject={track}
				/>
			))}
		</ul>
	);
}

export default Tracklist;
