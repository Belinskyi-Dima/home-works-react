import React,{ setState } from "react";
// import list from "./list.json"
import Product from "../components/productlist/productList.jsx";

class Card extends React.Component {
	constructor(props) {
		// console.log(props);
		super(props);
		this.state = ({
			arrayProduct:[],
		})
		// console.log(this.state);
	}
	
	 componentDidMount(){
		fetch('list.json')
			.then(res => res.json())
			.then(
				(result) => {
				// console.log(result)
				this.setState({
				arrayProduct: result
				})
			}
	)
	}

	render () {
		return (
			
			<>
			<div className="card-container">
				{/* <p>fdbfdsbsdf</p> */}
				
				{this.state.arrayProduct.map(card => {
					
				console.log(card);
				<Product 
				text="sdfgbvsdefrgvbfewdsbv"
				key={card.id}
				price={card.price}
				article={card.article}
				src={card.src}
				productName={card.productName}
				color={card.color}
				/>
				})
				}
			</div>
			</>
		)
}
}
export default Card;

{/* <img src="https://st.aliexpress.ru/mixer/ssr/1/aer-assets/media/ae-star.9c42614764446e264e81062dad87f117.png" alt="star" />
<ul className="card-list">
  {
	  this.state.arrayProduct.map((card) => {
	  console.log(card);
	  return <li className="card-item" key={card.id}>
				  <img className="card-img" src={card.src} alt="" />
				  <p className="card-name">{card.productName}</p>
				  <p className="card-price"><span>{card.price}</span>грн</p>
				  <p className="card-article">cod:<span>{card.article}</span></p>
			  </li>
  })
  }
</ul> */}