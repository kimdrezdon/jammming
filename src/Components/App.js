import styles from '../styles/App.module.css';
import { useState } from 'react';

const searchResultsArray = [
	{ song: 'Lateralus', artist: 'Tool', album: 'Lateralus', id: '0943' },
	{
		song: 'Rx Queen',
		artist: 'Deftones',
		album: 'White Pony',
		id: '2309',
	},
	{
		song: 'A History of Bad Men',
		artist: 'Melvins',
		album: 'A Senile Animal',
		id: '1230',
	},
];

export default function App() {
	const [searchInput, setSearchInput] = useState('');
	const [searchResults, setSearchResults] = useState(searchResultsArray);
	const [playlist, setPlaylist] = useState([]);

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

function NavBar({ children }) {
	return (
		<div className={styles.nav}>
			<h1>Jammming</h1>
			{children}
			<h2>Username</h2>
		</div>
	);
}

function Search({ searchInput, onSearch }) {
	const handleSubmit = e => {
		e.preventDefault();
		if (!searchInput) return;
		alert('Searching...');
	};

	const handleChange = e => {
		onSearch(e.target.value);
	};
	return (
		<form
			className={styles.search}
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				placeholder='Search Spotify...'
				value={searchInput}
				onChange={handleChange}
			/>
			<button>Search</button>
		</form>
	);
}

function Main({ children }) {
	return <div className={styles.flex}>{children}</div>;
}

function Box({ children }) {
	return <div className={styles.box}>{children}</div>;
}

function SearchResults({ searchResults, onAddTrack }) {
	return (
		<ul className={styles.ul}>
			{searchResults.map(track => (
				<li
					className={styles.li}
					key={track.id}
				>
					<div>
						<h3>{track.song}</h3>
						<h4>
							<span>{track.artist}</span>-
							<span>{track.album}</span>
						</h4>
					</div>
					<button
						className={styles.addRemove}
						onClick={() => onAddTrack(track)}
					>
						+
					</button>
				</li>
			))}
		</ul>
	);
}

function Playlist({ playlist, onRemoveTrack }) {
	return (
		<ul className={styles.ul}>
			{playlist.map(track => (
				<li
					className={styles.li}
					key={track.id}
				>
					<div>
						<h3>{track.song}</h3>
						<h4>
							<span>{track.artist}</span>-
							<span>{track.album}</span>
						</h4>
					</div>
					<button
						className={styles.addRemove}
						onClick={() => onRemoveTrack(track)}
					>
						-
					</button>
				</li>
			))}
		</ul>
	);
}

function PlaylistTitleInput() {
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

function SavePlaylistButton() {
	return (
		<button
			onClick={() => alert('Saved to Spotify')}
			className={styles.save}
		>
			Save to Spotify
		</button>
	);
}
