import React , {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import PropTypes from "prop-types";


export  const ButtonControl = ({type, dataid, openModal },) => {
// console.log(dataid);

	const { removeBasket, addToWishlist, basket} = useContext(GlobalContext)

	let storeBasked = basket.find((o)=>o.id === dataid);
	const basketDisabled = storeBasked ? true :  false;

      return (
			<>
			{type ==="basket" ? (
			<button 
			// onClick={openModal}
				// data-id= {data.id}
				data-id={dataid}
				onClick={()=> removeBasket(dataid)}
				// onClick={openModal}

				// onClick={()=>openModal()}
				className="btn">
					delite!!!
			</button>
			):(
			<button 
			data-id={dataid}
			disabled={basketDisabled}
			// data-id= {data.id}
			onClick={openModal}
			className="btn">
			Add to Basket!!
		</button>
		 
		 )}
	</>
      )
   
}

ButtonControl.protoType = {
	dataid: PropTypes.number,
	dataModalId: PropTypes.string,
	className: PropTypes.string,
	basketDisabled: PropTypes.bool,
}


