import { useRouteError } from 'react-router-dom';
import './errorPage.style.css';

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div id="error-page">
			<h1>Error, Will Robinson!</h1>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};