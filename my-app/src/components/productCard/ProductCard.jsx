import React, {useState, useContext} from "react";
import {ButtonControl} from "../Button/controlButton.jsx"
import { GlobalContext } from "../context/GlobalState.jsx";
import PropTypes from "prop-types";


export const ProductCard = ({data, type="", openModal, added } ) => {

	const { addToWishlist, wishlist} = useContext(GlobalContext)

	const onFavorite = (e) => {
		const idFavorite = e.target.id;
		addToWishlist(data)
	}

	const isItemAdded = (id) => {
		return wishlist.some((obj) => Number(obj.id) ===Number(id))
	}

	return(
		
		<div key={data.id} className="result-card">
	
		 	<div className="poster-wrapper">
			<img  
				src={data.src} 
				alt="product"
				/>
			</div>
			<div className="icon"
				// onClick={()=>addToWishlist(data)}
			>
				<img className="icon-star"
					id={data.id}
					src={added ?'./img/heart-red.jpg' : './img/heart-black.png' }
			
					// onClick={()=>addToWishlist(data)}
					onClick={onFavorite}
					alt="favourite" />
			</div>
			<div className="info">
				<div className="header">
					<h3 className="title">{data.productName}</h3>
					<p>price: {data.price}</p>
					<p>article: {data.article}</p>
				 </div>
		 
	
				<ButtonControl
					dataid={data.id}
					type={type}
					openModal={openModal}
				/>
			</div>
		</div> 
	)
}
ProductCard.propTypes = {
	data: PropTypes.object,
	openModal: PropTypes.func,
	added: PropTypes.bool
}