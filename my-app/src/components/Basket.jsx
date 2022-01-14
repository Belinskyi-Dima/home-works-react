import React, {useContext} from "react";
import { GlobalContext } from "./context/GlobalState.jsx"
import { ProductCard } from "./productCard/ProductCard.jsx";
import PropTypes from "prop-types";

export const Basket = ( {openModal}) => {
	const  { basket } = useContext(GlobalContext)
	// console.log(basket);
	return(
	<ul className="results">
		{basket.length > 0 ? basket.map((data)=>(
			<li className='results-item' key={data.id}>
						<ProductCard 
							data={data} 
							type="basket"
						// basketDisabled={basketDisabled}
							openModal={openModal}
						// addFavourite={addFavourite}
				
						/>
					</li>
		) ) : (<h3>No basket. Please add something</h3>) }
	
	</ul>
)
}

Basket.propTypes = {
	openModal: PropTypes.func
}