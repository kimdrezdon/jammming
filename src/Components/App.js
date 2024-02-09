import styles from '../styles/App.module.css';
import { useState } from 'react';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

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

export default App;
