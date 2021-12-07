import React from "react";
// import modalWindowData from "./components/modalWindowData";
import Button from "./components/Button/Button.jsx";
import './components/Button/Button.scss'
import Modal from "./components/Modal/Modal";
import Card from "./components/Card";
// import Product from "./components/productlist/productList.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalObject: {},
		
		}

	
  }


  openModal= (e) => {
	const id = e.target.dataset.id;
	const modalDeclaration = this.modalData.find(item => item.id === +id)
	console.log("open");

	this.setState({
		modalToShow: "Open",
		modalObject:{...modalDeclaration}

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
  }

  render(){
	  return(
		<>
		<Card/>
		

		
		{this.state.modalToShow === "Open"  &&
		<Modal
		 onClick={this.closeModal}
		 header={this.state.header}
		 closeButton={this.closeButton}
		 text={this.state.text}
		 description={this.state.description}
		 action={this.state.action}
		 closeButton={this.state.closeButton}
		 /> }
		 
			</>
	  )

  }

}
export default App;

		{/* <Button  
			dataid='1'
			className=" btn "
			backgroundColor={{background: "#f8ec02"}} 
			text=" add basket"
			onClick={this.openModal}
			/> */}