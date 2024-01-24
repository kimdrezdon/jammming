function Track(props) {
	return (
		<div>
			<div>
				<h3>Song</h3>
				<h4>
					<span>Artist</span>-<span>Album</span>
				</h4>
			</div>
			<div>{props.addRemove === 'add' ? '+' : '-'}</div>
		</div>
	);
}

export default Track;
