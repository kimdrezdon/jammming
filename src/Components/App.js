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

function App() {
	const [searchResults, setSearchResults] = useState(searchResultsArray);
	const [playlist, setPlaylist] = useState([]);

	const handleEditPlaylist = (trackObject, addRemove) => {
		if (addRemove === '+') {
			setPlaylist(playlist => [...playlist, trackObject]);
		} else if (addRemove === '-') {
			setPlaylist(playlist =>
				playlist.filter(track => track.id !== trackObject.id)
			);
		}
	};

	return (
		<div>
			<NavBar>
				<Search />
			</NavBar>
			<Main>
				<SearchResults
					tracks={searchResults}
					onEditPlaylist={handleEditPlaylist}
				/>
				<Playlist
					tracks={playlist}
					onEditPlaylist={handleEditPlaylist}
				/>
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

function Search() {
	const [searchInput, setSearchInput] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (!searchInput) return;
		alert('Searching...');
	};

	const handleChange = e => {
		setSearchInput(e.target.value);
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

function SearchResults({ tracks, onEditPlaylist }) {
	return (
		<div className={styles.box}>
			<Tracklist
				addRemove='+'
				tracks={tracks}
				onEditPlaylist={onEditPlaylist}
			/>
		</div>
	);
}

function Playlist({ tracks, onEditPlaylist }) {
	const [playlistTitle, setPlaylistTitle] = useState('');

	const handleChange = e => {
		setPlaylistTitle(e.target.value);
	};

	return (
		<div className={styles.box}>
			<input
				type='text'
				placeholder='Set a playlist title...'
				value={playlistTitle}
				onChange={handleChange}
			></input>
			<Tracklist
				addRemove='-'
				tracks={tracks}
				onEditPlaylist={onEditPlaylist}
			/>
			{tracks.length > 0 ? (
				<button onClick={() => alert('Saved to Spotify')}>
					Save to Spotify
				</button>
			) : null}
		</div>
	);
}

function Tracklist({ tracks, addRemove, onEditPlaylist }) {
	return (
		<ul className={styles.ul}>
			{tracks.map(track => (
				<Track
					key={track.id}
					addRemove={addRemove}
					trackObject={track}
					onEditPlaylist={onEditPlaylist}
				/>
			))}
		</ul>
	);
}

function Track({ trackObject, addRemove, onEditPlaylist }) {
	const { song, artist, album } = trackObject;

	const handleClick = () => {
		onEditPlaylist(trackObject, addRemove);
	};

	return (
		<li className={styles.li}>
			<div>
				<h3>{song}</h3>
				<h4>
					<span>{artist}</span>-<span>{album}</span>
				</h4>
			</div>
			<button
				className={styles.addRemove}
				onClick={handleClick}
			>
				{addRemove}
			</button>
		</li>
	);
}

export default App;
