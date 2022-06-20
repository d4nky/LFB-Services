// const container = document.getElementById('news-container');

// Promise.all([fetch('test.json').then((x) => x.text())]).then(([sampleResp]) => {
// 	container.innerHTML = sampleResp;
// });
const card = document.querySelectorAll('#card');
const text = document.querySelectorAll('#text');
const arrow = document.querySelectorAll('#arrow');

// card.classList.add = 'h-[180px]';

// let cardToggle = false;
// for (let i = 0; i < arrow.length; i++) {
// 	const clickedArrow = arrow[i];
// 	const currentText = text[i]
// 	const currentCard = card[i]
// 	clickedArrow.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		if (currentText.style.display = 'none') {
// 			currentCard.classList.add = 'h-auto';
// 			currentCard.classList.remove = 'h-[320px]';
// 			currentText.style.display = 'block';
// 		} else if (currentText.style.display = 'block') {
// 			currentText.style.display = 'none';
// 			currentCard.classList.remove = 'h-auto';
// 			currentCard.classList.add = 'h-[320px]';
// 		}
// 		console.log(currentCard)
// 	});
// }

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

//

// const scrollUpButton = document.getElementById('scroll-up');

// console.log(pageYOffset);

// window.onscroll = scrollFunction();

// function scrollFunction() {
// 	if (
// 		document.body.scrollTop > 50 ||
// 		document.documentElement.scrollTop > 50
// 	) {
// 		scrollUpButton.display = 'block';
// 	} else {
// 		scrollUpButton.style.display = 'none';
// 	}
// }
// scrollUpButton.addEventListener('click', () => {
// 	document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// });
