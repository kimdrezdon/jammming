import Tracklist from './Tracklist';

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

export default SearchResults;
