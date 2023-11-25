export default class LoginPortal {
	contructor() {
		this.user = {
			name: "username",
			email: "email",
			password: "password",
		};

		this.handleState = this.handleState.bind(this);
		this.portal = this.portal.bind(this);
	};

	handleState(e) {
		const state = this;
		console.log(state)
	};

	portal() {
		const { name, email, password, handleState } = this;

		const loginPortal = document.createElement('div');
			loginPortal.classList.add('login-portal-container');

		const username = document.createElement('div');
			username.classList.add('username-input');
			username.id="username";
			username.value = name;
			username.addEventListener('keyup', e => handleState(e));

		const useremail = document.createElement('input');
			useremail.classList.add('email-input');
			useremail.id = 'email';
			useremail.value = email;
			useremail.addEventListener('keyup', e => handleState(e));

		const userpassword = document.createElement('input');
			userpassword.classList.add('password-input');
			userpassword.id="password";
			userpassword.value = password;
			userpassword.addEventListener('keyup', e => handleState(e));


		loginPortal.appendChild(username);
		loginPortal.appendChild(useremail);
		loginPortal.appendChild(userpassword);

		return loginPortal;
	};
};