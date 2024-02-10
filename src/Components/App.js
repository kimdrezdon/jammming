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

	// const handleAddToPlaylist = track => {
	// 	setPlaylist(playlist => [...playlist, track]);
	// };

	return (
		<div className={styles.div}>
			<NavBar />
			<SearchBar />
			<div className={styles.flex}>
				<SearchResults tracks={searchResults} />
				<Playlist tracks={playlist} />
			</div>
		</div>
	);
}

function NavBar() {
	return (
		<div>
			<h1>Jammming</h1>
		</div>
	);
}

function SearchBar() {
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
		<form onSubmit={handleSubmit}>
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

function SearchResults({ tracks }) {
	return (
		<div>
			<Tracklist
				addRemove='+'
				tracks={tracks}
			/>
		</div>
	);
}

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

function Tracklist(props) {
	const { tracks, addRemove } = props;
	return (
		<ul className={styles.ul}>
			{tracks.map(track => (
				<Track
					key={track.id}
					addRemove={addRemove}
					trackObject={track}
				/>
			))}
		</ul>
	);
}

function Track({ trackObject, addRemove }) {
	const { song, artist, album } = trackObject;

	const handleClick = () => {
		addRemove === '+' ? alert('Add clicked') : alert('Remove clicked');
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

export default App;
