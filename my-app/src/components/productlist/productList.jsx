import React from "react";

class Product extends React.Component {
	constructor(props) {
		super(props)
		
	}

	render(){
		return(
			<>
		{console.log("product")}
		
				 <p>333333 </p> 
	 		<div className="card-list">{this.props.text}
				<div className="card-item" id={this.props.key}>
					{/* <img src="https://st.aliexpress.ru/mixer/ssr/1/aer-assets/media/ae-star.9c42614764446e264e81062dad87f117.png" alt="star" /> */}
					
					<img src={this.props.src} alt="star"/>
					<img className="card-img" src={this.props.src} alt="товар" />
					<p className="card-name">{this.props.productName}</p>
					<p>{this.props.price}</p>
					<p className="card-article">cod:{this.props.article}</p>
				</div>
				<button>Add to Basket</button>
			
			</div>
			</>
		)
	}
}
export default Product;