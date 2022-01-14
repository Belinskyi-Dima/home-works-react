export default (state, action) => {
	// console.log(action);
	switch(action.type) {
		case "ADD_TO_WISHLIST":
		return {
			...state,
			// basket: state.basket.filter(card => card.id !== action.payload.id),
			// basket: [action.payload, ...state.basket],
			
			wishlist: [ action.payload ,...state.wishlist]
		}

		case "REMOVE_FROM_WISHLIST":
		return {
			...state,
			wishlist: state.wishlist.filter(card => card.id !== action.payload.id)
		}

		case "ADD_TO_BASKET":
		return{
			...state,
			// wishlist: state.wishlist.filter(card => card.id !== action.payload.id),
			basket: [action.payload, ...state.basket]
		}

		// case "MOVIE_TO_WATCHLIST":
		// 	return {
		// 		...state,
		// 	watched: state.watched.filter(movie => movie.id !== action.payload.id),
		// 	watchlist: [action.payload, ...state.watchlist]
		// }
		case "REMOVIE_FROM_BASKET":
			return{
				...state,
				basket: state.basket.filter(card => card.id !== action.payload)
			}
	default: 
	return state;
		
	
}
};