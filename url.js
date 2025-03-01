let url = new URL(window.location.href);

for (let index = 0; index < quiz.length; ++index) {
	let test = quiz[index].id; 
	url.searchParams.set('key', test);
	let key = url.searchParams.getAll('key');
	let keyNumber = Number(key);
}
