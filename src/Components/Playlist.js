import Tracklist from './Tracklist';

function Playlist(props) {
	return (
		<div>
			<input
				type='text'
				value='title'
			></input>
			<Tracklist
				addRemove='-'
				tracks={props.tracks}
			/>
			<button>Save to Spotify</button>
		</div>
	);
}

export default Playlist;
