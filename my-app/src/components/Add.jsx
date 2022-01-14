import React, { useContext, useEffect, useState, setState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Switch, link } from 'react-router-dom';
// import { Header } from './Header.jsx';
// import { Wishlist } from "./Wishlist.jsx"
import { GlobalContext  } from './context/GlobalState.jsx';
// import { ResultCard } from "../components/ResultCard.jsx"
import Modal from  "./Modal/Modal.jsx"
// import Button from './Button/controlButton.jsx';
import { ProductCard } from "./productCard/ProductCard";
import PropTypes from "prop-types";

export const All = ({results}) => {
	// console.log(results);
	const [modal, setModal] = useState('')
	const [modalObject ,setModalObject] = useState({})

	const { addToBasket, isItemAdded } = useContext(GlobalContext);


	const openModal= (e) => {
			const id = e.target.dataset.id;
			const modalDeclaration = results.find(item => item.id === id)
			setModalObject(modalDeclaration)
			setModal("Open")
		}


		const closeModal= (e) => {
			const target = e.target.className;
			if(target === "modalOverlay" ||
			target === "btn-close btn")
			setModal("close")
	
			if (target === "btn-add btn") {
				addToBasket(modalObject)
				setModal("close")
		  }
		}



	
	return (
		<>
		
		<div className="add-page">
			<div className="container">
				<div className="add-content">
				<h2 className='all-list'>all list</h2>
					{results.length > 0 &&
						<ul className="results">
							{ results.map(data =>(
							
								<li className='results-item' key={data.id}>
								 
									  <ProductCard
									  openModal={openModal}
									  data={data}
									  dataid={data.id}
									  modalObject={modalObject}
									  added={isItemAdded(data && data.id)}
									  />
				
								</li>
							))}
								
						</ul>	
					}
							
				</div>
			
			</div>
		</div>
		{modal === "Open"  &&
		<Modal
		data={modalObject}
		results={results}
		closeModal={closeModal}
		 text="you wont add to basket?"

		 /> }

		</>

)
} 
All.propTypes = {
	results: PropTypes.array.isRequired
}