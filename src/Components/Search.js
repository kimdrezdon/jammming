import styles from '../styles/App.module.css';

export function Search({ searchInput, onSearch }) {
	const handleSubmit = e => {
		e.preventDefault();
	};

	const handleChange = e => {
		onSearch(e.target.value);
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
