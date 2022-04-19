const container = document.getElementById('container');


Promise.all([fetch('test.json').then((x) => x.text())]).then(([sampleResp]) => {
	container.innerHTML = sampleResp;
});
