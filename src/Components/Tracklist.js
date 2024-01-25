import Track from './Track';
import styles from '../styles/Tracklist.module.css';

function Tracklist(props) {
	const { tracks, addRemove } = props;
	return (
		<div className={styles.div}>
			{tracks.map((track, index) => (
				<Track
					key={index}
					addRemove={addRemove}
					track={track}
				/>
			))}
		</div>
	);
}

export default Tracklist;
