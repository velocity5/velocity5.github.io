const form = document.querySelector('.searchForm');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
	// prevent default load
	event.preventDefault();
	// get the value of the input field
	const input = document.querySelector('.searchForm-input');
	// remove whitespace
	const searchQuery = input.value.trim();
	// print searchQuery
	fetchResults(searchQuery);
}

function fetchResults(searchQuery) {
	const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
	fetch (endpoint)
	.then(res => res.json())
	.then(data => {
		const rs = data.query.search;
		displayResults(rs);
	});
}

function displayResults(rs) {
	const searchResults = document.querySelector('.searchResults');
	searchResults.innerHTML = '';
	rs.forEach(result => {
		const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
		searchResults.insertAdjacentHTML('beforeend',
	      `<div class="resultItem">
	        <h3 class="resultItem-title">
	          <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
	        </h3>
	        <span class="resultItem-snippet">${result.snippet}</span><br>
	        <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
	      </div>`
      );
	});
}