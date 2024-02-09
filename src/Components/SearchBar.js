import { useState } from 'react';

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

export default SearchBar;
