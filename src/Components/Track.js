import styles from '../styles/Track.module.css';

function Track({ trackObject, addRemove }) {
	const { song, artist, album } = trackObject;

	const handleClick = () => {
		alert('Add remove clicked');
	};

	return (
		<li className={styles.li}>
			<div>
				<h3>{song}</h3>
				<h4>
					<span>{artist}</span>-<span>{album}</span>
				</h4>
			</div>
			<button onClick={handleClick}>{addRemove}</button>
		</li>
	);
}

export default Track;
