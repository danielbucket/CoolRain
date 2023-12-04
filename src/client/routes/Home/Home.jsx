import './home.style.css';
import { Outlet } from 'react-router-dom';

export default function Home() {

	return (
		<>
			<div className="home-container header-style">
				<p>Cool Rain CraftMakers</p>
				<p>(making bullshit just for you!)</p>
			</div>
			<Outlet />
		</>
	);
};