import Tracklist from './Tracklist';

function SearchResults(props) {
	return (
		<div>
			<Tracklist
				addRemove='+'
				tracks={props.tracks}
			/>
		</div>
	);
}

export default SearchResults;
