import React,{ setState } from "react";
// import list from "./list.json"
import Product from "../components/productlist/productList.jsx";
import "./productlist/product.scss";
import "../components/Card.scss";
import Modal from "./Modal/Modal.jsx";
import Button  from "../components/Button/Button.jsx";

	const basketArray = {};
	const wishlist = {};
class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalObject: {},
			modalToShow: "none",
			arrayProduct:[],
			basketIcon:"",
		}
	}
	openModal= (e) => {
	
		const modalID = e.target.dataset.id;

		const modalDeclaration = this.state.arrayProduct.find(item => item.id === modalID);
			
		basketArray[modalDeclaration.id] = modalDeclaration;
			
	console.log(modalDeclaration);
		this.setState({
			modalToShow: "Open",
			modalObject:{...modalDeclaration},
		
		})
		
	  }

	  closeModal= (e) => {
		const target = e.target.className;
		if(target === "modalOverlay" ||
		 target === "modalWindow" ||
		 target === "btn-close btn")


		this.setState({
			modalToShow: "close",
		})

		if (target === "btn-add btn") {
			// basketArray.push(this.state.modalObject)
			basketArray[this.state.modalObject.id] = this.state.modalObject;
			this.setState({
				modalToShow: "close"
			})
			localStorage.setItem("basket", JSON.stringify(basketArray))
	  }
	}

	 componentDidMount(){
		fetch('list.json')
			.then(res => res.json())
			.then(
				(result) => {
				// console.log(result)
				this.setState({
				arrayProduct: result,
				})
			}
	)}

	addFavourite =(e)=> {
		e.target.classList.toggle('icon-star-active')
		const modalID = e.target.id;
		console.log(modalID);
		
		if(wishlist[modalID]){
			delete wishlist[modalID];
		} else {
			const modalDeclaratio = this.state.arrayProduct.find(item => item.id === modalID)
			wishlist[modalDeclaratio.id] = modalDeclaratio;
		}
		
		localStorage.setItem("wishlist", JSON.stringify(wishlist));
	}

	render () {
		return (
			
			<>
			<div className="card-container">
	
				{this.state.arrayProduct.map((card) => (
			
				<Product 
				dataid= {card.id}
				icon={card.favourite} 
				color={card.color}
				
				onClick={this.addFavourite}
				backgroundColor={this.state.backgroundColor}
				key={card.id}
				price={card.price}
				article={card.article}
				src={card.src}
				productName={card.productName}
				color={card.color}
				btn={this.props.click}
				button={
					<Button  
						id={card.id}
						dataid= {card.id}
						className=" btn "
						backgroundColor={{background: "#eee"}} 
						text=" add basket"
						onClick={this.openModal}
					/> 
				}
				/>

				))
				
				}
			
			</div>
	{this.state.modalToShow === "Open"  &&
		<Modal
		 onClick={this.closeModal}
		 header="are you sure want to add to basket?"
		//  closeButton={this.closeButton}
		 text={this.state.text}
		 description={this.state.description}
		 action={this.state.action}
		 closeButton={this.state.closeButton}
		 onBasket={this.addBasket}

		 /> }
			</>
		)
}
}
export default Card;
wish