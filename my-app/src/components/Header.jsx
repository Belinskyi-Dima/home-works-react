import React, { useContext, useEffect, useState, setState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Wishlist} from "./Wishlist"
import { GlobalContext  } from './context/GlobalState.jsx';

export const Header = () => {

	// const {showAllList} = useContext(GlobalContext)
	const [ results, setResults ] = useState([]);
	const {watchlist} = useContext(GlobalContext);

	
	return (
		
		<header>
			<div className="container">
				<div className="inner-container">
					{/* <div className="brand">
						<Link to="/">WatchList</Link>
					</div> */}

					<ul className="nav-links">
						<li>
							<Link to="/" >+All</Link>
						</li>

						<li>
							<Link className="btn" to="/wishlist">Wishlist</Link>
						</li>

						<li>
							<Link to="/basket" className="btn"> Basket</Link>
						</li>
					</ul>

				</div>
			</div>
		</header>
	)
}
