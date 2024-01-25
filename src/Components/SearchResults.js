import Tracklist from './Tracklist';

function SearchResults(props) {
	return (
		<div>
			<Tracklist
				addRemove='add'
				tracks={props.tracks}
			/>
		</div>
	);
}

export default SearchResults;
