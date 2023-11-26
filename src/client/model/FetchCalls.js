export const loginUser = (state,user) => {
	fetch(`api/v1/login/${ user.email }`)
	.then(res => {
		return res
	})
	.catch(err => console.error('Error: ', err))
};