// const container = document.getElementById('news-container');

// Promise.all([fetch('test.json').then((x) => x.text())]).then(([sampleResp]) => {
// 	container.innerHTML = sampleResp;
// });

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
