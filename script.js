

fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.json())
	.then(json => document.write(JSON.stringify(json)));

