import './header.style.css';

function Header(element) {
	const container = document.createElement('div');
		container.classList = "header-container";
		container.innerHTML = "Header";

	element.appendChild(container);
};

export default Header;