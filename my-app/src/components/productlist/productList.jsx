import React from "react";
import Button from "../Button/Button.jsx"
import star from "../../img/star.svg"
class Product extends React.Component {
	
	constructor(props) {
		super(props)


	}
	render(){
		return(
			<>
	 		<div className="card-list" id={this.props.key}>
				<div className="card-item" >
				<img id={this.props.dataid} className="icon-star" style={this.props.backgroundColor} onClick={this.props.onClick} src={star} alt="star" />
				{/* <Button text={"like"} className="btn"/> */}
				
					<img className="card-img" src={this.props.src} alt="товар" />
					<p className="card-name">{this.props.productName}</p>
					<p>{this.props.price}грн</p>
					<p className="card-article">cod:{this.props.article}</p>
					{/* <button onClick={this.props.btn} className='card-btn'>Add to Basket</button> */}
					{/* <Button text="Add to Basket" onClick={this.props.btn} className="btn btn-basket"/> */}
					{this.props.button}
				</div>
			
			</div>
			</>
		)
	}
}
export default Product;