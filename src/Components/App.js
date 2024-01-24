import '../styles/App.css';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<SearchBar />
			<SearchResults />
			<Playlist />
		</div>
	);
}

export default App;
