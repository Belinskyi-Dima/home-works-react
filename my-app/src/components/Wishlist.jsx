import React, {useContext} from "react";
import {ProductCard} from "./productCard/ProductCard.jsx"
import { GlobalContext } from "./context/GlobalState";



export const Wishlist = () => {

	const  { wishlist, isItemAdded } = useContext(GlobalContext)

	return (
	<ul className="results">
		{wishlist.length > 0 ? 
		wishlist.map((data) => (
			
			<li className='results-item' key={data.id}>
			<ProductCard 
				data={data}
				type="wishlist"
				added={isItemAdded(data && data.id)}
			/>
			</li>
		))
				
		: (
			<h2>No card in your Wishlist, add some body</h2>
		
		)}

</ul>
	)
	}
