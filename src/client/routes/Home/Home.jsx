import './home.style.css';
import { Outlet } from 'react-router-dom';

export default function Home() {

	return (
		<>
			<div className="home-container header-style">
				<div className="company-name-container">
					<p>Cool Rain</p>
					<p>Craft Makers</p>
				</div>
				<div className="navigation">
					<div
						className="nav-btn"
						onClick={element => {
							console.log("Wood Gallery Button")
						}}
						>{"{ Wood Gallery }"}</div>
					<div
						className="nav-btn"
						onClick={element => {
							console.log("Metal Gallery Button")
						}}
						>{"{ Metal Gallery }"}</div>
					<div
						className="nav-btn"
						onClick={element => {
							console.log("Mythta T Button")
						}}
						>{"{ Mythta T }"}</div>
				</div>
			</div>
			<Outlet />
		</>
	);
};