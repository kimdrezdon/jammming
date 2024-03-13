import { useEffect, useState } from 'react';
import config from '../config';
import { SavePlaylistButton } from './SavePlaylistButton';
import { PlaylistTitleInput } from './PlaylistTitleInput';
import { Playlist } from './Playlist';
import { SearchResults } from './SearchResults';
import { Box } from './Box';
import { Main } from './Main';
import { Search } from './Search';
import { NavBar } from './NavBar';

export default function App() {
	const [searchInput, setSearchInput] = useState('tool');
	const [searchResults, setSearchResults] = useState([]);
	const [playlist, setPlaylist] = useState([]);

	useEffect(
		function () {
			async function fetchSongs() {
				// const res1 = await fetch(
				// 	'https://accounts.spotify.com/api/token',
				// 	{
				// 		body: `grant_type=client_credentials&client_id=${config.MY_CLIENT_ID}&client_secret=${config.MY_SECRET}`,
				// 		headers: {
				// 			'Content-Type': 'application/x-www-form-urlencoded',
				// 		},
				// 		method: 'POST',
				// 	}
				// );
				// const auth = await res1.json();
				// config.MY_TOKEN = auth.access_token;

				const res2 = await fetch(
					`https://api.spotify.com/v1/search?q=${searchInput}&type=track&limit=10`,
					{
						headers: {
							Authorization: `Bearer  ${config.MY_TOKEN}`,
						},
						method: 'GET',
					}
				);
				const data = await res2.json();
				console.log(data.tracks.items);
				setSearchResults(data.tracks.items);
			}

			fetchSongs();
		},
		[searchInput]
	);

	const handleAddTrack = trackObject => {
		setPlaylist(playlist => [...playlist, trackObject]);
	};

	const handleRemoveTrack = trackObject => {
		setPlaylist(playlist =>
			playlist.filter(track => track.id !== trackObject.id)
		);
	};

	return (
		<div>
			<NavBar>
				<Search
					searchInput={searchInput}
					onSearch={setSearchInput}
				/>
			</NavBar>
			<Main>
				<Box>
					<SearchResults
						searchResults={searchResults}
						onAddTrack={handleAddTrack}
					/>
				</Box>
				<Box>
					<PlaylistTitleInput />
					<Playlist
						playlist={playlist}
						onRemoveTrack={handleRemoveTrack}
					/>
					{playlist.length > 0 ? <SavePlaylistButton /> : null}
				</Box>
			</Main>
		</div>
	);
}
