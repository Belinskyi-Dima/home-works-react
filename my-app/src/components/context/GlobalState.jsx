import React, {createContext, useReducer, useEffect, useState} from "react";
import AppReducer from "./AppReducer";



const initialState = {
	wishlist: localStorage.getItem("wishlist")
	? JSON.parse(localStorage.getItem("wishlist"))
	: [],

	  basket: localStorage.getItem("basket")
	  ? JSON.parse(localStorage.getItem("basket"))
	  : [],

 };






 export const GlobalContext = createContext(initialState);

 export const GlobalProvider = (props) => {
	//  console.log(props);
	 const [state, dispatch] = useReducer(AppReducer, initialState)



	useEffect(() => {
		localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
		localStorage.setItem("basket", JSON.stringify(state.basket));
	}, [state]);

		const addToBasket = (card) => {
			dispatch({ type: "ADD_TO_BASKET", payload: card});
		};


		const addToWishlist = (card)=> {
	
			if(state.wishlist.find(favObj =>favObj.id === card.id)){
				console.log("==remove=");
				dispatch({ type: "REMOVE_FROM_WISHLIST", payload: card});
			}else {
				console.log("add");
				dispatch({ type: "ADD_TO_WISHLIST", payload: card});
			}

		}


		const removeBasket = (id) => {
			// console.log(id);
			dispatch({type : "REMOVIE_FROM_BASKET" , payload : id})
		}


		
	const isItemAdded = (id) => {
// console.log("isItemAdded");
		return state.wishlist.some((obj) => Number(obj.id) ===Number(id))
	}
	

	return(

		<GlobalContext.Provider 
			value={{
				wishlist: state.wishlist, 
				basket: state.basket,
				addToBasket,
				addToWishlist,
				removeBasket,
				isItemAdded,
			
				// showAllList,
		}}
		>

			{props.children}
		</GlobalContext.Provider>
	)
 }