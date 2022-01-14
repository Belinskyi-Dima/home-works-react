import React, {useContext} from "react";
import { GlobalContext } from "./context/GlobalState"
import {ProductCard} from "./productCard/ProductCard"


export const ResultCard = ({data,dataid, openModal, addFavourite=null} ) => {
	const {  basket , addToWishlist} = useContext(GlobalContext);

	// let storeBasked = basket.find((o)=>o.id === data.id);
	// const basketDisabled = storeBasked ? true :  false;

	return (
		<ProductCard 
		data={data} 
		// basketDisabled={basketDisabled}
		openModal={openModal}
		addFavourite={addFavourite}
		dataid={dataid}
		// type="wishlist"
		// type="basket"

		/>

	)
}



	// <div className="result-card">
		//  	<div className="poster-wrapper">
		// 	<img  
		// 		src={data.src} 
		// 		alt="star"
		// 		/>
		// 	</div>
		// 	<div className="icon">
		// 		<img className="icon-star"
		// 			id={data.id}
		// 			// onClick={()=>addToWishlist(data)}
		// 			// disabled={wishlistDisabled}
		// 			src={data.favourite} 
		// 			onClick={addFavourite}
		// 			alt="favourite" />
		// 	</div>
		// 	<div className="info">
		// 		<div className="header">
		// 			<h3 className="title">{data.productName}</h3>
		// 			<p>price: {data.price}</p>
		// 			<p>article: {data.article}</p>
		// 		 </div>
		//  {/* <ProductCard card={data}/>   */}
		// 		<button 
		// 			disabled={basketDisabled}
		// 			data-id= {data.id}
		// 			onClick={openModal}
		// 			className="btn">
		// 			Add to Basket
		// 		</button>
						

		// 	</div>
		// </div> 