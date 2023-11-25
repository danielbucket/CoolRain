import './body.style.css'

export default function Body() {
	const text = "Body Poop!";
	
	const bodyElement = document.createElement('div');
	 bodyElement.innerHTML = `
			<div id="body_container" class="body-container">${ text }</div>
		`;

	return bodyElement;
};