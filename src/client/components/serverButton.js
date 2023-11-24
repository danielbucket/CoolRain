import './serverbutton.style.css';
const url = "api/v1/button";

function getButtonResp(url) {
	fetch(url)
		.then(res => res.json())
		.then(data => {
			console.log('data: ', data);
		})
		.catch(err => console.error(`ERROR AT getButtonResp(): ${err}`));
};

const serverButton = (element) => {
	const button = document.createElement('button');
		button.classList.add('server-button');
		button.onclick = () => getButtonResp(url);

	element.appendChild(button);
};

export default serverButton;