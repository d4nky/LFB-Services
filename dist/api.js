// fetch('https://api.linkedin.com/v2/originalArticles?q=lfb-services')
// 	.then((response) => {
// 		// indicates whether the response is successful (status code 200-299) or not
// 		if (!response.ok) {
// 			throw new Error(`Request failed with status ${reponse.status}`);
// 		}
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data.count);
// 		console.log(data.products);
// 	})
// 	.catch((error) => console.log(error));
const request = new XMLHttpRequest();
request.open(
	'GET',
	'https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:company:86604120?format=json'
);
request.send();
request.onload = () => {
	console.log(request);
};
