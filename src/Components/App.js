import styles from '../styles/App.module.css';
import { useState } from 'react';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

function App() {
	const searchResultsArray = [
		{ song: 'Lateralus', artist: 'Tool', album: 'Lateralus' },
		{ song: 'Rx Queen', artist: 'Deftones', album: 'White Pony' },
		{
			song: 'A History of Bad Men',
			artist: 'Melvins',
			album: 'A Senile Animal',
		},
	];

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
