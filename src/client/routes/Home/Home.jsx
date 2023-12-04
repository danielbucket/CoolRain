import './home.style.css';
import { Outlet } from 'react-router-dom';

export default function Home() {

	return (
		<>
			<div className="home-container">
				<p>Cool Rain CraftMakers</p>
				<p>Making Shit for Fun</p>
			</div>
			<Outlet />
		</>
	);
};