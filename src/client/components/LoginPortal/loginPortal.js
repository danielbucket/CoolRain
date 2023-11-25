import './loginPortal.style.css';

export default class LoginPortal {
	constructor() {
		this.user = {
			name: "user",
			email: "email",
			password: "password",
		};

		this.portal = this.portal.bind(this);
		this.handleState = this.handleState.bind(this);
		this.fetchUserCred = this.fetchUserCred.bind(this);
	}

	handleState(e) {
		const { target } = e;
		const state = this.user;
		const newState = Object.assign(state, { [target.id]: target.value });

		this.user = newState;
	}

	fetchUserCred() {
		const { name, email, password } = this.user;
		
		fetch('api/v1/login')
			.then(res => res.json())
			.then(data => console.log('Data: ', data))
			.catch(err => console.error("ERROR at fetchUserCred(): ", err))
	}

	portal(handleAppState) {
		const { name, email, password } = this.user;

		const nameInput = document.createElement('input');
			nameInput.classList.add('name-input');
			nameInput.id = "name";
			nameInput.value = name;
			nameInput.addEventListener('focus', () => nameInput.value="");
			nameInput.addEventListener('keyup', e => this.handleState(e));

		const emailInput = document.createElement('input');
			emailInput.classList.add('email-input');
			emailInput.id = "email";
			emailInput.value = email;
			emailInput.addEventListener('focus', () => emailInput.value="");
			emailInput.addEventListener('keyup', e => this.handleState(e));

		const passwordInput = document.createElement('input');
			passwordInput.classList.add('password-input');
			passwordInput.id = "password";
			passwordInput.value = password;
			passwordInput.addEventListener('focus', () => passwordInput.value="");
			passwordInput.addEventListener('keyup', e => this.handleState(e));

		const submitBtn = document.createElement('button');
			submitBtn.classList.add('submit-btn');
			submitBtn.innerText = "Submit"
			submitBtn.addEventListener('click', () => {
				this.fetchUserCred()
			})

		const portalContainer = document.createElement('div');
			portalContainer.classList.add('portal-container');
			
		portalContainer.appendChild(nameInput);
		portalContainer.appendChild(emailInput);
		portalContainer.appendChild(passwordInput);
		portalContainer.appendChild(submitBtn);

		return portalContainer;
	};
};