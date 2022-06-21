// const container = document.getElementById('news-container');

// Promise.all([fetch('test.json').then((x) => x.text())]).then(([sampleResp]) => {
// 	container.innerHTML = sampleResp;
// });

//Card hover
const card = document.querySelectorAll('#card');
const text = document.querySelectorAll('#text');

let cardToggle = false;
for (let i = 0; i < card.length; i++) {
	const currentText = text[i]
	const currentCard = card[i]
	currentCard.addEventListener('mouseover', (e) => {
		e.preventDefault();

		if(currentText.classList.contains = 'hidden'){
			currentText.classList.remove = 'hidden'
		}
	});
}

//Mobile menu
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