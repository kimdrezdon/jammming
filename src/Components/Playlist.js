import Tracklist from './Tracklist';
import { useState } from 'react';

function Playlist({ tracks }) {
	const [playlistTitle, setPlaylistTitle] = useState('');

	const handleChange = e => {
		setPlaylistTitle(e.target.value);
	};

	return (
		<div>
			<input
				type='text'
				placeholder='Set a playlist title...'
				value={playlistTitle}
				onChange={handleChange}
			></input>
			<Tracklist
				addRemove='-'
				tracks={tracks}
			/>
			{tracks.length > 0 ? (
				<button onClick={() => alert('Saved to Spotify')}>
					Save to Spotify
				</button>
			) : null}
		</div>
	);
}

export default Playlist;
