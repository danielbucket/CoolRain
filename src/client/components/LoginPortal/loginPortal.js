import './loginPortal.style.css';
import { loginUser } from '../../model/FetchCalls.js';

export default class LoginPortal {
	constructor() {
		this.state = {
			user: {
				name: "user",
				email: "email",
				password: "password",
			}
		};

		this.portal = this.portal.bind(this);
		this.handleState = this.handleState.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
		this.onfocusEvent = this.onfocusEvent.bind(this);
		this.loginUser = loginUser.bind(this);
	};

	onfocusEvent(e) {
		const { id, value } = e.target;
		const newVal = this.state.user[id];
		if (value == id) { e.target.value = "" }
		else { e.target.value = newVal };
	};

	onfocusOutEvent(e) {
		const { id, value } = e.target;
		const stateVal = this.state.user[id];
		if (value == "") { e.target.value = id }
		else if (value != id) { e.target.value = stateVal };
	};

	handleState(e) {
		const { target } = e;
		const state = this.state.user;
		const newState = Object.assign(state, { [target.id]: target.value });
		this.user = newState;
	};

	submitLogin() {
		const newState = { name:"name", email:"email", password:"password" };
		const userData = this.state.user;

		this.loginUser(this,userData);
			
		Object.assign(this.state.user, newState);
		Object.keys(this.state.user).map(i => document.getElementById(i).value = i);
	};

	portal(handleAppState) {
		const { name, email, password } = this.state.user;

		const nameInput = document.createElement('input');
			nameInput.classList.add('name-input');
			nameInput.id = "name";
			nameInput.value = "name";
			nameInput.addEventListener('focus', e => this.onfocusEvent(e));
			nameInput.addEventListener('keyup', e => this.handleState(e));
			nameInput.addEventListener('focusout', e => this.onfocusOutEvent(e));

		const emailInput = document.createElement('input');
			emailInput.classList.add('email-input');
			emailInput.id = "email";
			emailInput.value = email;
			emailInput.addEventListener('focus', e => this.onfocusEvent(e));
			emailInput.addEventListener('keyup', e => this.handleState(e));
			emailInput.addEventListener('focusout', e => this.onfocusOutEvent(e));

		const passwordInput = document.createElement('input');
			passwordInput.classList.add('password-input');
			passwordInput.id = "password";
			passwordInput.value = password;
			passwordInput.addEventListener('focus', e => this.onfocusEvent(e));
			passwordInput.addEventListener('keyup', e => this.handleState(e));
			passwordInput.addEventListener('focusout', e => this.onfocusOutEvent(e));

		const submitBtn = document.createElement('button');
			submitBtn.classList.add('submit-btn');
			submitBtn.innerText = "Submit"
			submitBtn.addEventListener('click', () => this.submitLogin());

		const portalContainer = document.createElement('div');
			portalContainer.classList.add('portal-container');
			portalContainer.id = "portal_container";
			
		portalContainer.appendChild(nameInput);
		portalContainer.appendChild(emailInput);
		portalContainer.appendChild(passwordInput);
		portalContainer.appendChild(submitBtn);

		return portalContainer;
	};
};