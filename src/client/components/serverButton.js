import './serverbutton.style.css';

const serverButton = (element) => {
	const button = document.createElement('button');
		button.classList.add('server-button');
		button.onclick = () => {
			fetch('/hello')
				.then(res => res.json())
				.then(res => {
					console.log('res: ', res)
					// element.innerText = res;
				})
			.catch(err => console.log("ERROR: ", err))
		};
	element.appendChild(button);
};

export default serverButton;