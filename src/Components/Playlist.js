import Tracklist from './Tracklist';

function Playlist() {
	return (
		<div>
			<input type='text' value='title'></input>
			<Tracklist />
			<button>Save to Spotify</button>
		</div>
	);
}

export default Playlist;
