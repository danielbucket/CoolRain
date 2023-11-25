import './header.style.css';
import LoginPortal from '../LoginPortal/loginPortal.js';
const loginPortal = new LoginPortal;

export default function Header(handleAppState, user) {
	
	const headerContainer = document.createElement('div');
		headerContainer.classList.add('header-container');
		headerContainer.appendChild(loginPortal.portal(handleAppState));


	return headerContainer;
};