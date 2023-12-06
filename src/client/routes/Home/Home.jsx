import './home.style.css';
import { Outlet, NavLink } from 'react-router-dom';

export default function Home() {

	return (
		<>
			<div className="home-container header-style">
				<div className="company-name-container">
					<NavLink to="/">Cool Rain</NavLink>
					<NavLink to="/">Craft Makers</NavLink>
				</div>
				<div className="navigation">
					<NavLink
						to="wood_gallery/"
						className={({ isActive,isPending }) => [
							isActive ? "active" : "",
							isPending ? "pending" : "",
							].join(" nav-btn")
						}
						onClick={element => {
							console.log("Wood Gallery Button")
						}}
						>{"{ Wood }"}</NavLink>
					<NavLink
						to="metal_gallery/"
						className={({ isActive,isPending }) => [
							isActive ? "active" : "",
							isPending ? "pending" : "",
							].join(" nav-btn")
						}
						onClick={element => {
							console.log("Metal Gallery Button")
						}}
						>{"{ Metal }"}</NavLink>
					<NavLink
						to="mythta_t/"
						className={({ isActive,isPending }) => [
							isActive ? "active" : "",
							isPending ? "pending" : "",
							].join(" nav-btn")
						}
						onClick={element => {
							console.log("Mythta T Button")
						}}
						>{"{ Mythta T }"}</NavLink>
				</div>
			</div>
			<Outlet />
		</>
	);
};