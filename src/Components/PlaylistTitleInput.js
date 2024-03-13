import { useState } from 'react';

export function PlaylistTitleInput() {
	const [playlistTitle, setPlaylistTitle] = useState('');

	const handleChange = e => {
		setPlaylistTitle(e.target.value);
	};

	return (
		<input
			type='text'
			placeholder='Set a playlist title...'
			value={playlistTitle}
			onChange={handleChange}
		></input>
	);
}
