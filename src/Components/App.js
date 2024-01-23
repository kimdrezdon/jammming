import '../styles/App.css';
import SearchBar from './SearchBar';
import Header from './Header';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

function App() {
	return (
		<div className='App'>
			<Header />
			<SearchBar />
			<SearchResults />
			<Playlist />
		</div>
	);
}

export default App;
