const input = document.getElementById('input');
const button = document.getElementById('button');
const container = document.getElementById('container');

let post = [];

button.addEventListener('click', (e) => {
	e.preventDefault();
	let inputVal = input.value;
	localStorage.setItem('myItem', JSON.stringify(inputVal))
	post.push(inputVal);
});
