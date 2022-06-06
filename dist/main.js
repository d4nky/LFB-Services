const container = document.getElementById('news-container');

Promise.all([fetch('test.json').then((x) => x.text())]).then(([sampleResp]) => {
	container.innerHTML = sampleResp;
});
const navBar = document.getElementById('navBar');
const content = navBar.childNodes;
const offsetY = 50;
// navBar.style.opacity = '0%';
// window.addEventListener('scroll', (e) => {
// 	console.log(window.pageYOffset);
// 	if (window.pageYOffset > offsetY) {
// 		navBar.style.display = 'flex';
// 		navBar.style.paddingTop = '34px';
// 		navBar.style.paddingBottom = '34px';
// 	} else if (window.pageYOffset == 0) {
// 		navBar.style.display = 'none';
// 	}
// // });
// console.log(content)
// window.addEventListener('scroll', (e) => {
// 	if (window.pageYOffset > offsetY) {
// 		content.style.display = 'block';
// 		navBar.style.height = '130px';
// 	} else if (window.pageYOffset < offsetY) {
// 		navBar.style.height = '0px';
// 		content.style.display = 'none'
// 	}
// });

const mobileNavButton = document.getElementById('mobile-nav-button');

mobileNavButton.addEventListener('click', (e) => {});
