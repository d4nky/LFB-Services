const container = document.getElementById('news');

Promise.all([fetch('test.txt').then((x) => x.text())]).then(([sampleResp]) => {
	container.innerHTML = sampleResp;
});

//Card hover
const card = document.querySelectorAll('#card');
const text = document.querySelectorAll('#text');

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
console.log(card)

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