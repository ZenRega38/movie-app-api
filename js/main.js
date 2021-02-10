$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	});
});

function getMovies(searchText){
	axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d73773ec&s='+searchText)
	.then((response) => {
		console.log(response);
		let movies = response.data.Search;
		let output = '';
		$.each(movies, (index, movie) => {
			output += `
				<div class="col-md-3">
					<div class="well text-center">
						<img src="${movie.}">
						<h5>${movie.Title}</h5>
					</div>
				</div>
			`;
		})
	})
	.catch((err) => {
		console.log(err);
	})
}