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
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';

export default function App() {
	const [searchInput, setSearchInput] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [playlist, setPlaylist] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleAddTrack = trackObject => {
		if (playlist.map(track => track.id).includes(trackObject.id)) {
			return;
		}
		setPlaylist(playlist => [...playlist, trackObject]);
	};

	const handleRemoveTrack = trackObject => {
		setPlaylist(playlist =>
			playlist.filter(track => track.id !== trackObject.id)
		);
	};

	useEffect(() => {
		async function fetchToken() {
			const response = await fetch(
				'https://accounts.spotify.com/api/token',
				{
					body: `grant_type=client_credentials&client_id=${config.MY_CLIENT_ID}&client_secret=${config.MY_SECRET}`,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					method: 'POST',
				}
			);
			const auth = await response.json();
			config.MY_TOKEN = auth.access_token;
		}

		fetchToken();
	}, []);

	useEffect(() => {
		const controller = new AbortController();
		async function fetchSongs() {
			try {
				setIsLoading(true);
				setError('');
				const response = await fetch(
					`https://api.spotify.com/v1/search?q=${searchInput}&type=track&limit=10`,
					{
						headers: {
							Authorization: `Bearer  ${config.MY_TOKEN}`,
						},
						method: 'GET',
						signal: controller.signal,
					}
				);

				if (!response.ok) {
					throw new Error('Something went wrong with fetching songs');
				}
				const data = await response.json();
				setSearchResults(data.tracks.items);
				setError('');
			} catch (err) {
				console.log(err.message);
				if (err.name !== 'AbortError') {
					setError(err.message);
				}
			} finally {
				setIsLoading(false);
			}
		}

		if (!searchInput) {
			return;
		}

		fetchSongs();

		return function () {
			controller.abort();
		};
	}, [searchInput]);

	useEffect(() => {
		localStorage.setItem('playlist', JSON.stringify(playlist));
	}, [playlist]);

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
					{isLoading && <Loader />}
					{!isLoading && !error && (
						<SearchResults
							searchResults={searchResults}
							onAddTrack={handleAddTrack}
						/>
					)}

					{error && <ErrorMessage error={error} />}
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
