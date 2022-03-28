import styles from "./NavBar.module.scss";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<Link to="/">
					<span className={styles.icon + " fa fa-tasks"}></span>
				</Link>
				<ul>
					<li>
						<NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
					</li>
					<li>
						<NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
					</li>
					<li>
						<NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;