import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div>
				<img src="https://logosmarcas.net/wp-content/uploads/2020/11/Star-Wars-Emblema.png" style={{ width: "70px" }} />
			</div>
			<div className="nav-item dropdown">
				<a className="nav-link dropdown-toggle"
					href="#" role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false" >
					Favoritos </a>
				<ul className="dropdown-menu">
					{store.favoritos.map((item, id) =>
						<li key={id}>{item}</li>
					)}
				</ul>

			</div>
		</nav>
	);
};
