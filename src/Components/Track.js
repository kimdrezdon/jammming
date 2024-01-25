import styles from '../styles/Track.module.css';

function Track(props) {
	const { song, artist, album } = props.track;

	return (
		<div className={styles.div}>
			<div>
				<h3>{song}</h3>
				<h4>
					<span>{artist}</span>-<span>{album}</span>
				</h4>
			</div>
			<div>{props.addRemove === 'add' ? '+' : '-'}</div>
		</div>
	);
}

export default Track;
