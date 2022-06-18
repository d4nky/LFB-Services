// const container = document.getElementById('news-container');

// Promise.all([fetch('test.json').then((x) => x.text())]).then(([sampleResp]) => {
// 	container.innerHTML = sampleResp;
// });

const arrow = document.getElementById('test-arrow');
const text = document.getElementById('test-text');

arrow.addEventListener('click', () => {
	if (text.style.display == 'none') {
		text.style.display = 'block';
	} else {
		text.style.display = 'none';
	}
});
const mobileNavButton = document.getElementById('mobile-nav-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenu.style.marginTop = '-500px';
let menuToggle = false;
mobileNavButton.addEventListener('click', (e) => {
	e.preventDefault();
	if (menuToggle == false) {
		mobileMenu.style.marginTop = '0px';
		menuToggle = true;
	} else if (menuToggle == true) {
		mobileMenu.style.marginTop = '-500px';
		menuToggle = false;
	}
});

const scrollUpButton = document.getElementById('scroll-up');

console.log(pageYOffset);

window.onscroll = scrollFunction();

function scrollFunction() {
	if (
		document.body.scrollTop > 50 ||
		document.documentElement.scrollTop > 50
	) {
		scrollUpButton.display = 'block';
	} else {
		scrollUpButton.style.display = 'none';
	}
}
scrollUpButton.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
